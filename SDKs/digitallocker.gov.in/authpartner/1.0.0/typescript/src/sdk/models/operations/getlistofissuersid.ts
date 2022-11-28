import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListOfIssuersIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class GetListOfIssuersId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfIssuersId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfIssuersId500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: any;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class GetListOfIssuersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: any;

  @SpeakeasyMetadata()
  security: GetListOfIssuersIdSecurity;
}


export class GetListOfIssuersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getListOfIssuersId400ApplicationJsonObject?: GetListOfIssuersId400ApplicationJson;

  @SpeakeasyMetadata()
  getListOfIssuersId401ApplicationJsonObject?: GetListOfIssuersId401ApplicationJson;

  @SpeakeasyMetadata()
  getListOfIssuersId500ApplicationJsonObject?: GetListOfIssuersId500ApplicationJson;

  @SpeakeasyMetadata()
  issuerResponse?: shared.IssuerResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
