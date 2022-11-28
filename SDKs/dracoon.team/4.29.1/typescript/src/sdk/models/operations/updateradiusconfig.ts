import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateRadiusConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateRadiusConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateRadiusConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RadiusConfigUpdateRequest;
}


export class UpdateRadiusConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  radiusConfig?: shared.RadiusConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
