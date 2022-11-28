import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountUpdatePasswordRequestBody extends SpeakeasyBase {
    oldPassword?: string;
    password: string;
}
export declare class AccountUpdatePasswordSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class AccountUpdatePasswordRequest extends SpeakeasyBase {
    request?: AccountUpdatePasswordRequestBody;
    security: AccountUpdatePasswordSecurity;
}
export declare class AccountUpdatePasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
