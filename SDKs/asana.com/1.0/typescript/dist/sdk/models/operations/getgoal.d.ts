import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGoalPathParams extends SpeakeasyBase {
    goalGid: string;
}
export declare class GetGoalQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetGoal200ApplicationJson extends SpeakeasyBase {
    data?: shared.GoalResponse;
}
export declare class GetGoalRequest extends SpeakeasyBase {
    pathParams: GetGoalPathParams;
    queryParams: GetGoalQueryParams;
}
export declare class GetGoalResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getGoal200ApplicationJsonObject?: GetGoal200ApplicationJson;
}
