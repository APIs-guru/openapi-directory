import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersGetSessionsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UsersGetSessionsSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class UsersGetSessionsRequest extends SpeakeasyBase {
    pathParams: UsersGetSessionsPathParams;
    security: UsersGetSessionsSecurity;
}
export declare class UsersGetSessionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sessionList?: shared.SessionList;
}
