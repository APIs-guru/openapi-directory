import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveSubgoalPathParams extends SpeakeasyBase {
    goalGid: string;
}
export declare class RemoveSubgoalQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class RemoveSubgoalRequestBody extends SpeakeasyBase {
    data?: shared.GoalRemoveSubgoalRequest;
}
export declare class RemoveSubgoal200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class RemoveSubgoalRequest extends SpeakeasyBase {
    pathParams: RemoveSubgoalPathParams;
    queryParams: RemoveSubgoalQueryParams;
    request: RemoveSubgoalRequestBody;
}
export declare class RemoveSubgoalResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    removeSubgoal200ApplicationJsonObject?: RemoveSubgoal200ApplicationJson;
}
