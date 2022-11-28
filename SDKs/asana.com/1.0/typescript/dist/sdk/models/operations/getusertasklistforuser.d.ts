import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserTaskListForUserPathParams extends SpeakeasyBase {
    userGid: string;
}
export declare class GetUserTaskListForUserQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
    workspace: string;
}
export declare class GetUserTaskListForUser200ApplicationJson extends SpeakeasyBase {
    data?: shared.UserTaskListResponse;
}
export declare class GetUserTaskListForUserRequest extends SpeakeasyBase {
    pathParams: GetUserTaskListForUserPathParams;
    queryParams: GetUserTaskListForUserQueryParams;
}
export declare class GetUserTaskListForUserResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getUserTaskListForUser200ApplicationJsonObject?: GetUserTaskListForUser200ApplicationJson;
}
