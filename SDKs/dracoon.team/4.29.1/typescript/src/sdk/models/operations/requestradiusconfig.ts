import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestRadiusConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestRadiusConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestRadiusConfigHeaders;
}


export class RequestRadiusConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  radiusConfig?: shared.RadiusConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
