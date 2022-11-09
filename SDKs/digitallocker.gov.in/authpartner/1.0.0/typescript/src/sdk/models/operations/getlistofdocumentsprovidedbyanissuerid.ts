import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListOfDocumentsProvidedByAnIssuerIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class GetListOfDocumentsProvidedByAnIssuerIdRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: any;

  @Metadata()
  security: GetListOfDocumentsProvidedByAnIssuerIdSecurity;
}


export class GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: any;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: any;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class GetListOfDocumentsProvidedByAnIssuerIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  docTypeResponse?: shared.DocTypeResponse;

  @Metadata()
  getListOfDocumentsProvidedByAnIssuerId400ApplicationJsonObject?: GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson;

  @Metadata()
  getListOfDocumentsProvidedByAnIssuerId401ApplicationJsonObject?: GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson;

  @Metadata()
  getListOfDocumentsProvidedByAnIssuerId500ApplicationJsonObject?: GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson;

  @Metadata()
  statusCode: number;
}
