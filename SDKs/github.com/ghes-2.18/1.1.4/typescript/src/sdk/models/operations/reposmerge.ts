import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposMergePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposMergeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base" })
  base: string;

  @SpeakeasyMetadata({ data: "json, name=commit_message" })
  commitMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=head" })
  head: string;
}


export class ReposMergeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposMergePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposMergeRequestBody;
}


export class ReposMergeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  commit?: shared.Commit;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
