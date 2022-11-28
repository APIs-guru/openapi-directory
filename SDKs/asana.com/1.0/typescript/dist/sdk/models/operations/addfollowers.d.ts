import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddFollowersPathParams extends SpeakeasyBase {
    goalGid: string;
}
export declare class AddFollowersQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class AddFollowersRequestBody extends SpeakeasyBase {
    data?: shared.TaskAddFollowersRequest;
}
export declare class AddFollowers201ApplicationJson extends SpeakeasyBase {
    data?: shared.GoalResponse;
}
export declare class AddFollowersRequest extends SpeakeasyBase {
    pathParams: AddFollowersPathParams;
    queryParams: AddFollowersQueryParams;
    request: AddFollowersRequestBody;
}
export declare class AddFollowersResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    addFollowers201ApplicationJsonObject?: AddFollowers201ApplicationJson;
}
