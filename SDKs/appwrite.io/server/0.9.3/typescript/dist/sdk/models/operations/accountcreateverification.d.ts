import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountCreateVerificationRequestBody extends SpeakeasyBase {
    url: string;
}
export declare class AccountCreateVerificationSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class AccountCreateVerificationRequest extends SpeakeasyBase {
    request?: AccountCreateVerificationRequestBody;
    security: AccountCreateVerificationSecurity;
}
export declare class AccountCreateVerificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    token?: shared.Token;
}
