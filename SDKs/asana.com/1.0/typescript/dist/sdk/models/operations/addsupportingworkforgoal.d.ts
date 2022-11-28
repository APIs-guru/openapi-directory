import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddSupportingWorkForGoalPathParams extends SpeakeasyBase {
    goalGid: string;
}
export declare class AddSupportingWorkForGoalQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class AddSupportingWorkForGoalRequestBody extends SpeakeasyBase {
    data?: shared.GoalAddSupportingWorkRequest;
}
export declare class AddSupportingWorkForGoal200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class AddSupportingWorkForGoalRequest extends SpeakeasyBase {
    pathParams: AddSupportingWorkForGoalPathParams;
    queryParams: AddSupportingWorkForGoalQueryParams;
    request: AddSupportingWorkForGoalRequestBody;
}
export declare class AddSupportingWorkForGoalResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    addSupportingWorkForGoal200ApplicationJsonObject?: AddSupportingWorkForGoal200ApplicationJson;
}
