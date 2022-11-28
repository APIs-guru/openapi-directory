import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersUpdateStatusPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UsersUpdateStatusRequestBody extends SpeakeasyBase {
    status: number;
}
export declare class UsersUpdateStatusSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class UsersUpdateStatusRequest extends SpeakeasyBase {
    pathParams: UsersUpdateStatusPathParams;
    request?: UsersUpdateStatusRequestBody;
    security: UsersUpdateStatusSecurity;
}
export declare class UsersUpdateStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
