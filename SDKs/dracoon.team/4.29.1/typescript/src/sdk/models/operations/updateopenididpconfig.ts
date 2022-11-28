import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateOpenIdIdpConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=idp_id" })
  idpId: number;
}


export class UpdateOpenIdIdpConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateOpenIdIdpConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOpenIdIdpConfigPathParams;

  @SpeakeasyMetadata()
  headers: UpdateOpenIdIdpConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateOpenIdIdpConfigRequest;
}


export class UpdateOpenIdIdpConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  openIdIdpConfig?: shared.OpenIdIdpConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
