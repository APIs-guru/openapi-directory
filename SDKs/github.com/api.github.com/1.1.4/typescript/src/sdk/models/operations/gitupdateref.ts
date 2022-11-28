import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GitUpdateRefPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ref" })
  ref: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class GitUpdateRefRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;
}


export class GitUpdateRefRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GitUpdateRefPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: GitUpdateRefRequestBody;
}


export class GitUpdateRefResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  gitRef?: shared.GitRef;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
