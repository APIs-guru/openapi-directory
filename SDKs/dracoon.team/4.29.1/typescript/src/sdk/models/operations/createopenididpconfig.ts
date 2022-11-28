import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateOpenIdIdpConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class CreateOpenIdIdpConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateOpenIdIdpConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateOpenIdIdpConfigRequest;
}


export class CreateOpenIdIdpConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  openIdIdpConfig?: shared.OpenIdIdpConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
