import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateOpenIdIdpConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class CreateOpenIdIdpConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateOpenIdIdpConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateOpenIdIdpConfigRequest;
}


export class CreateOpenIdIdpConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  openIdIdpConfig?: shared.OpenIdIdpConfig;

  @Metadata()
  statusCode: number;
}
