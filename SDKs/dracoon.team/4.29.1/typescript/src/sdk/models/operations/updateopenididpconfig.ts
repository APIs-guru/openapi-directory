import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateOpenIdIdpConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=idp_id" })
  idpId: number;
}


export class UpdateOpenIdIdpConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateOpenIdIdpConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOpenIdIdpConfigPathParams;

  @Metadata()
  headers: UpdateOpenIdIdpConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateOpenIdIdpConfigRequest;
}


export class UpdateOpenIdIdpConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  openIdIdpConfig?: shared.OpenIdIdpConfig;

  @Metadata()
  statusCode: number;
}
