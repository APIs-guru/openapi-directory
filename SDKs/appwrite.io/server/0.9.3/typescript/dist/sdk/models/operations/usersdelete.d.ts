import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UsersDeletePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UsersDeleteSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class UsersDeleteRequest extends SpeakeasyBase {
    pathParams: UsersDeletePathParams;
    security: UsersDeleteSecurity;
}
export declare class UsersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
