import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminCreateImpersonationOAuthTokenPathParams extends SpeakeasyBase {
    username: string;
}
export declare class EnterpriseAdminCreateImpersonationOAuthTokenRequestBody extends SpeakeasyBase {
    scopes?: string[];
}
export declare class EnterpriseAdminCreateImpersonationOAuthTokenRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminCreateImpersonationOAuthTokenPathParams;
    request?: EnterpriseAdminCreateImpersonationOAuthTokenRequestBody;
}
export declare class EnterpriseAdminCreateImpersonationOAuthTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authorization?: shared.Authorization;
}
