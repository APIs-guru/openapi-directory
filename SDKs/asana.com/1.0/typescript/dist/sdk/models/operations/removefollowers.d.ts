import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveFollowersPathParams extends SpeakeasyBase {
    goalGid: string;
}
export declare class RemoveFollowersQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class RemoveFollowersRequestBody extends SpeakeasyBase {
    data?: shared.TaskAddFollowersRequest;
}
export declare class RemoveFollowers201ApplicationJson extends SpeakeasyBase {
    data?: shared.GoalResponse;
}
export declare class RemoveFollowersRequest extends SpeakeasyBase {
    pathParams: RemoveFollowersPathParams;
    queryParams: RemoveFollowersQueryParams;
    request: RemoveFollowersRequestBody;
}
export declare class RemoveFollowersResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    removeFollowers201ApplicationJsonObject?: RemoveFollowers201ApplicationJson;
}
