import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateRadiusConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateRadiusConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateRadiusConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RadiusConfigUpdateRequest;
}


export class UpdateRadiusConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  radiusConfig?: shared.RadiusConfig;

  @Metadata()
  statusCode: number;
}
