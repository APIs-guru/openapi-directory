import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestRadiusConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestRadiusConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestRadiusConfigHeaders;
}


export class RequestRadiusConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  radiusConfig?: shared.RadiusConfig;

  @Metadata()
  statusCode: number;
}
