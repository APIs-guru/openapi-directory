import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSearchParametersForADocumentIdSecurity extends SpeakeasyBase {
    oauthsecurity: shared.SchemeOauthsecurity;
}
export declare class GetSearchParametersForADocumentIdRequest extends SpeakeasyBase {
    request?: any;
    security: GetSearchParametersForADocumentIdSecurity;
}
export declare class GetSearchParametersForADocumentId400ApplicationJson extends SpeakeasyBase {
    error?: any;
    errorDescription?: any;
}
export declare class GetSearchParametersForADocumentId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetSearchParametersForADocumentId500ApplicationJson extends SpeakeasyBase {
    error?: any;
    errorDescription?: any;
}
export declare class GetSearchParametersForADocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    getSearchParametersForADocumentId400ApplicationJsonObject?: GetSearchParametersForADocumentId400ApplicationJson;
    getSearchParametersForADocumentId401ApplicationJsonObject?: GetSearchParametersForADocumentId401ApplicationJson;
    getSearchParametersForADocumentId500ApplicationJsonObject?: GetSearchParametersForADocumentId500ApplicationJson;
    searchParametersResponse?: shared.SearchParametersResponse[];
    statusCode: number;
}
