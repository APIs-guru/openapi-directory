import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposUpdateStatusCheckProtectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposUpdateStatusCheckProtectionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contexts" })
  contexts?: string[];

  @SpeakeasyMetadata({ data: "json, name=strict" })
  strict?: boolean;
}


export class ReposUpdateStatusCheckProtectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposUpdateStatusCheckProtectionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposUpdateStatusCheckProtectionRequestBody;
}


export class ReposUpdateStatusCheckProtectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  statusCheckPolicy?: shared.StatusCheckPolicy;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
