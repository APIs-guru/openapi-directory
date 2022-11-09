import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccountUpdateEmailRequestBody extends SpeakeasyBase {
    email: string;
    password: string;
}
export declare class AccountUpdateEmailSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class AccountUpdateEmailRequest extends SpeakeasyBase {
    request?: AccountUpdateEmailRequestBody;
    security: AccountUpdateEmailSecurity;
}
export declare class AccountUpdateEmailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
