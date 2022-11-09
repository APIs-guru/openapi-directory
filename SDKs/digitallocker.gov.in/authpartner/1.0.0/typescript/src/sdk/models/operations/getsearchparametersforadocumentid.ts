import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSearchParametersForADocumentIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class GetSearchParametersForADocumentIdRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: any;

  @Metadata()
  security: GetSearchParametersForADocumentIdSecurity;
}


export class GetSearchParametersForADocumentId400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: any;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class GetSearchParametersForADocumentId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetSearchParametersForADocumentId500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: any;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class GetSearchParametersForADocumentIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSearchParametersForADocumentId400ApplicationJsonObject?: GetSearchParametersForADocumentId400ApplicationJson;

  @Metadata()
  getSearchParametersForADocumentId401ApplicationJsonObject?: GetSearchParametersForADocumentId401ApplicationJson;

  @Metadata()
  getSearchParametersForADocumentId500ApplicationJsonObject?: GetSearchParametersForADocumentId500ApplicationJson;

  @Metadata({ elemType: shared.SearchParametersResponse })
  searchParametersResponse?: shared.SearchParametersResponse[];

  @Metadata()
  statusCode: number;
}
