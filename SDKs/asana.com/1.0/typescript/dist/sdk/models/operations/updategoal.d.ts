import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGoalPathParams extends SpeakeasyBase {
    goalGid: string;
}
export declare class UpdateGoalQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class UpdateGoalRequestBodyInput extends SpeakeasyBase {
    data?: shared.GoalRequestInput;
}
export declare class UpdateGoal200ApplicationJson extends SpeakeasyBase {
    data?: shared.GoalResponse;
}
export declare class UpdateGoalRequest extends SpeakeasyBase {
    pathParams: UpdateGoalPathParams;
    queryParams: UpdateGoalQueryParams;
    request: UpdateGoalRequestBodyInput;
}
export declare class UpdateGoalResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    updateGoal200ApplicationJsonObject?: UpdateGoal200ApplicationJson;
}
