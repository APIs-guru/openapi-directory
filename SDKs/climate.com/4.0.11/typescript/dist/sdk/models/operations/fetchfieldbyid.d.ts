import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FetchFieldByIdPathParams extends SpeakeasyBase {
    fieldId: string;
}
export declare class FetchFieldByIdSecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class FetchFieldByIdSecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class FetchFieldByIdSecurity extends SpeakeasyBase {
    option1?: FetchFieldByIdSecurityOption1;
    option2?: FetchFieldByIdSecurityOption2;
}
export declare class FetchFieldByIdRequest extends SpeakeasyBase {
    pathParams: FetchFieldByIdPathParams;
    security: FetchFieldByIdSecurity;
}
export declare class FetchFieldByIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    field?: any;
    headers: Map<string, string[]>;
    statusCode: number;
}
