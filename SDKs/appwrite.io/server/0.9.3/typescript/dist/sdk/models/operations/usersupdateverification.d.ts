import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UsersUpdateVerificationPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UsersUpdateVerificationRequestBody extends SpeakeasyBase {
    emailVerification: boolean;
}
export declare class UsersUpdateVerificationSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class UsersUpdateVerificationRequest extends SpeakeasyBase {
    pathParams: UsersUpdateVerificationPathParams;
    request?: UsersUpdateVerificationRequestBody;
    security: UsersUpdateVerificationSecurity;
}
export declare class UsersUpdateVerificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
