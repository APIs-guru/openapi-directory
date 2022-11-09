import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListOfIssuersIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class GetListOfIssuersIdRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: any;

  @Metadata()
  security: GetListOfIssuersIdSecurity;
}


export class GetListOfIssuersId400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfIssuersId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfIssuersId500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: any;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class GetListOfIssuersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getListOfIssuersId400ApplicationJsonObject?: GetListOfIssuersId400ApplicationJson;

  @Metadata()
  getListOfIssuersId401ApplicationJsonObject?: GetListOfIssuersId401ApplicationJson;

  @Metadata()
  getListOfIssuersId500ApplicationJsonObject?: GetListOfIssuersId500ApplicationJson;

  @Metadata()
  issuerResponse?: shared.IssuerResponse;

  @Metadata()
  statusCode: number;
}
