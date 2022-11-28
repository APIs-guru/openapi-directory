import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSearchParametersForADocumentIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class GetSearchParametersForADocumentId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: any;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class GetSearchParametersForADocumentId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetSearchParametersForADocumentId500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: any;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class GetSearchParametersForADocumentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: any;

  @SpeakeasyMetadata()
  security: GetSearchParametersForADocumentIdSecurity;
}


export class GetSearchParametersForADocumentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSearchParametersForADocumentId400ApplicationJsonObject?: GetSearchParametersForADocumentId400ApplicationJson;

  @SpeakeasyMetadata()
  getSearchParametersForADocumentId401ApplicationJsonObject?: GetSearchParametersForADocumentId401ApplicationJson;

  @SpeakeasyMetadata()
  getSearchParametersForADocumentId500ApplicationJsonObject?: GetSearchParametersForADocumentId500ApplicationJson;

  @SpeakeasyMetadata({ elemType: shared.SearchParametersResponse })
  searchParametersResponse?: shared.SearchParametersResponse[];

  @SpeakeasyMetadata()
  statusCode: number;
}
