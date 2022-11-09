import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccountUpdateRecoveryRequestBody extends SpeakeasyBase {
    password: string;
    passwordAgain: string;
    secret: string;
    userId: string;
}
export declare class AccountUpdateRecoverySecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class AccountUpdateRecoveryRequest extends SpeakeasyBase {
    request?: AccountUpdateRecoveryRequestBody;
    security: AccountUpdateRecoverySecurity;
}
export declare class AccountUpdateRecoveryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    token?: shared.Token;
}
