import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateRadiusConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class CreateRadiusConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateRadiusConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RadiusConfigCreateRequest;
}


export class CreateRadiusConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  radiusConfig?: shared.RadiusConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
