import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountUpdateVerificationRequestBody extends SpeakeasyBase {
    secret: string;
    userId: string;
}
export declare class AccountUpdateVerificationSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class AccountUpdateVerificationRequest extends SpeakeasyBase {
    request?: AccountUpdateVerificationRequestBody;
    security: AccountUpdateVerificationSecurity;
}
export declare class AccountUpdateVerificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    token?: shared.Token;
}
