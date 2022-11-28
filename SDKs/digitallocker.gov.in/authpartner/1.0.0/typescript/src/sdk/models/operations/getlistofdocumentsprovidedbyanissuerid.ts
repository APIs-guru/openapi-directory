import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListOfDocumentsProvidedByAnIssuerIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: any;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: any;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class GetListOfDocumentsProvidedByAnIssuerIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: any;

  @SpeakeasyMetadata()
  security: GetListOfDocumentsProvidedByAnIssuerIdSecurity;
}


export class GetListOfDocumentsProvidedByAnIssuerIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  docTypeResponse?: shared.DocTypeResponse;

  @SpeakeasyMetadata()
  getListOfDocumentsProvidedByAnIssuerId400ApplicationJsonObject?: GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson;

  @SpeakeasyMetadata()
  getListOfDocumentsProvidedByAnIssuerId401ApplicationJsonObject?: GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson;

  @SpeakeasyMetadata()
  getListOfDocumentsProvidedByAnIssuerId500ApplicationJsonObject?: GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
