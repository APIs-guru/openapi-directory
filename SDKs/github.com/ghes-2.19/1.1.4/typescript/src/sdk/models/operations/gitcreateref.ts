import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GitCreateRefPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class GitCreateRefRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=ref" })
  ref: string;

  @Metadata({ data: "json, name=sha" })
  sha: string;
}


export class GitCreateRefRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GitCreateRefPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: GitCreateRefRequestBody;
}


export class GitCreateRefResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  gitRef?: shared.GitRef;

  @Metadata()
  validationError?: shared.ValidationError;
}
