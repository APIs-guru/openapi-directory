import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GitCreateRefPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class GitCreateRefRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref: string;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;
}


export class GitCreateRefRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GitCreateRefPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: GitCreateRefRequestBody;
}


export class GitCreateRefResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  gitRef?: shared.GitRef;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
