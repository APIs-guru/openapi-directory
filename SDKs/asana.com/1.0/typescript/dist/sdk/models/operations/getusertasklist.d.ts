import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserTaskListPathParams extends SpeakeasyBase {
    userTaskListGid: string;
}
export declare class GetUserTaskListQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetUserTaskList200ApplicationJson extends SpeakeasyBase {
    data?: shared.UserTaskListResponse;
}
export declare class GetUserTaskListRequest extends SpeakeasyBase {
    pathParams: GetUserTaskListPathParams;
    queryParams: GetUserTaskListQueryParams;
}
export declare class GetUserTaskListResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getUserTaskList200ApplicationJsonObject?: GetUserTaskList200ApplicationJson;
}
