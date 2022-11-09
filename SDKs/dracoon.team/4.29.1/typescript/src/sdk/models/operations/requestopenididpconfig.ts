import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestOpenIdIdpConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=idp_id" })
  idpId: number;
}


export class RequestOpenIdIdpConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestOpenIdIdpConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestOpenIdIdpConfigPathParams;

  @Metadata()
  headers: RequestOpenIdIdpConfigHeaders;
}


export class RequestOpenIdIdpConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  openIdIdpConfig?: shared.OpenIdIdpConfig;

  @Metadata()
  statusCode: number;
}
