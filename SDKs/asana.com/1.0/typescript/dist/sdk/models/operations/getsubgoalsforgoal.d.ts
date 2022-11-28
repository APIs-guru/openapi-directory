import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubgoalsForGoalPathParams extends SpeakeasyBase {
    goalGid: string;
}
export declare class GetSubgoalsForGoalQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetSubgoalsForGoal200ApplicationJson extends SpeakeasyBase {
    data?: shared.GoalCompact[];
}
export declare class GetSubgoalsForGoalRequest extends SpeakeasyBase {
    pathParams: GetSubgoalsForGoalPathParams;
    queryParams: GetSubgoalsForGoalQueryParams;
}
export declare class GetSubgoalsForGoalResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getSubgoalsForGoal200ApplicationJsonObject?: GetSubgoalsForGoal200ApplicationJson;
}
