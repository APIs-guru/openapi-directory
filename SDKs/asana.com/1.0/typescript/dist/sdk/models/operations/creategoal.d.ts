import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateGoalQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreateGoalRequestBodyInput extends SpeakeasyBase {
    data?: shared.GoalRequestInput;
}
export declare class CreateGoal201ApplicationJson extends SpeakeasyBase {
    data?: shared.GoalResponse;
}
export declare class CreateGoalRequest extends SpeakeasyBase {
    queryParams: CreateGoalQueryParams;
    request: CreateGoalRequestBodyInput;
}
export declare class CreateGoalResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createGoal201ApplicationJsonObject?: CreateGoal201ApplicationJson;
}
