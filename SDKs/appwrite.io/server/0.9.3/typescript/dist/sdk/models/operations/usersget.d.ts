import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersGetPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UsersGetSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class UsersGetRequest extends SpeakeasyBase {
    pathParams: UsersGetPathParams;
    security: UsersGetSecurity;
}
export declare class UsersGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
