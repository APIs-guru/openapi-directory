import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetParentGoalsForGoalPathParams extends SpeakeasyBase {
    goalGid: string;
}
export declare class GetParentGoalsForGoalQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetParentGoalsForGoal200ApplicationJson extends SpeakeasyBase {
    data?: shared.GoalCompact[];
}
export declare class GetParentGoalsForGoalRequest extends SpeakeasyBase {
    pathParams: GetParentGoalsForGoalPathParams;
    queryParams: GetParentGoalsForGoalQueryParams;
}
export declare class GetParentGoalsForGoalResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getParentGoalsForGoal200ApplicationJsonObject?: GetParentGoalsForGoal200ApplicationJson;
}
