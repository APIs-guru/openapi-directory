import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UsersCreateRequestBody extends SpeakeasyBase {
    email: string;
    name?: string;
    password: string;
}
export declare class UsersCreateSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class UsersCreateRequest extends SpeakeasyBase {
    request?: UsersCreateRequestBody;
    security: UsersCreateSecurity;
}
export declare class UsersCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
