import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountCreateOAuth2SessionPathParams extends SpeakeasyBase {
    provider: string;
}
export declare class AccountCreateOAuth2SessionQueryParams extends SpeakeasyBase {
    failure?: string;
    scopes?: string[];
    success?: string;
}
export declare class AccountCreateOAuth2SessionSecurity extends SpeakeasyBase {
    project: shared.SchemeProject;
}
export declare class AccountCreateOAuth2SessionRequest extends SpeakeasyBase {
    pathParams: AccountCreateOAuth2SessionPathParams;
    queryParams: AccountCreateOAuth2SessionQueryParams;
    security: AccountCreateOAuth2SessionSecurity;
}
export declare class AccountCreateOAuth2SessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
