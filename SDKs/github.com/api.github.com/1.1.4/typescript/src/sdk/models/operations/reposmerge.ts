import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposMergePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposMergeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=base" })
  base: string;

  @Metadata({ data: "json, name=commit_message" })
  commitMessage?: string;

  @Metadata({ data: "json, name=head" })
  head: string;
}


export class ReposMergeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposMergePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposMergeRequestBody;
}


export class ReposMerge404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ReposMerge409ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ReposMergeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  commit?: shared.Commit;

  @Metadata()
  reposMerge404ApplicationJsonObject?: ReposMerge404ApplicationJson;

  @Metadata()
  reposMerge409ApplicationJsonObject?: ReposMerge409ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
