import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateRadiusConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class CreateRadiusConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateRadiusConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RadiusConfigCreateRequest;
}


export class CreateRadiusConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  radiusConfig?: shared.RadiusConfig;

  @Metadata()
  statusCode: number;
}
