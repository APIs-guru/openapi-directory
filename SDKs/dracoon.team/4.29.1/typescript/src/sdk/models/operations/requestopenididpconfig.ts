import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestOpenIdIdpConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=idp_id" })
  idpId: number;
}


export class RequestOpenIdIdpConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestOpenIdIdpConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestOpenIdIdpConfigPathParams;

  @SpeakeasyMetadata()
  headers: RequestOpenIdIdpConfigHeaders;
}


export class RequestOpenIdIdpConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  openIdIdpConfig?: shared.OpenIdIdpConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
