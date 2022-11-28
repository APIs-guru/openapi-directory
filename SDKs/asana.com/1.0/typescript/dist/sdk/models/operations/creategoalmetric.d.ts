import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateGoalMetricPathParams extends SpeakeasyBase {
    goalGid: string;
}
export declare class CreateGoalMetricQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreateGoalMetricRequestBodyInput extends SpeakeasyBase {
    data?: shared.GoalMetricRequestInput;
}
export declare class CreateGoalMetric200ApplicationJson extends SpeakeasyBase {
    data?: shared.GoalResponse;
}
export declare class CreateGoalMetricRequest extends SpeakeasyBase {
    pathParams: CreateGoalMetricPathParams;
    queryParams: CreateGoalMetricQueryParams;
    request: CreateGoalMetricRequestBodyInput;
}
export declare class CreateGoalMetricResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createGoalMetric200ApplicationJsonObject?: CreateGoalMetric200ApplicationJson;
}
