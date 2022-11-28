import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveSupportingWorkForGoalPathParams extends SpeakeasyBase {
    goalGid: string;
}
export declare class RemoveSupportingWorkForGoalQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class RemoveSupportingWorkForGoalRequestBody extends SpeakeasyBase {
    data?: shared.GoalAddSupportingWorkRequest;
}
export declare class RemoveSupportingWorkForGoal200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class RemoveSupportingWorkForGoalRequest extends SpeakeasyBase {
    pathParams: RemoveSupportingWorkForGoalPathParams;
    queryParams: RemoveSupportingWorkForGoalQueryParams;
    request: RemoveSupportingWorkForGoalRequestBody;
}
export declare class RemoveSupportingWorkForGoalResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    removeSupportingWorkForGoal200ApplicationJsonObject?: RemoveSupportingWorkForGoal200ApplicationJson;
}
