import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersGetLogsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UsersGetLogsSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class UsersGetLogsRequest extends SpeakeasyBase {
    pathParams: UsersGetLogsPathParams;
    security: UsersGetLogsSecurity;
}
export declare class UsersGetLogsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    logList?: shared.LogList;
}
