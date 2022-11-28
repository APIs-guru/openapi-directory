import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGoalMetricPathParams extends SpeakeasyBase {
    goalGid: string;
}
export declare class UpdateGoalMetricQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class UpdateGoalMetricRequestBodyInput extends SpeakeasyBase {
    data?: shared.GoalMetricCurrentValueRequestInput;
}
export declare class UpdateGoalMetric200ApplicationJson extends SpeakeasyBase {
    data?: shared.GoalResponse;
}
export declare class UpdateGoalMetricRequest extends SpeakeasyBase {
    pathParams: UpdateGoalMetricPathParams;
    queryParams: UpdateGoalMetricQueryParams;
    request: UpdateGoalMetricRequestBodyInput;
}
export declare class UpdateGoalMetricResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    updateGoalMetric200ApplicationJsonObject?: UpdateGoalMetric200ApplicationJson;
}
