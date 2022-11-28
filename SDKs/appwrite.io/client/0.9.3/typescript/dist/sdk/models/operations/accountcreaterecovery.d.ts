import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountCreateRecoveryRequestBody extends SpeakeasyBase {
    email: string;
    url: string;
}
export declare class AccountCreateRecoverySecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class AccountCreateRecoveryRequest extends SpeakeasyBase {
    request?: AccountCreateRecoveryRequestBody;
    security: AccountCreateRecoverySecurity;
}
export declare class AccountCreateRecoveryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    token?: shared.Token;
}
