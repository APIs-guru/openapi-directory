import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteGoalPathParams extends SpeakeasyBase {
    goalGid: string;
}
export declare class DeleteGoalQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class DeleteGoal200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class DeleteGoalRequest extends SpeakeasyBase {
    pathParams: DeleteGoalPathParams;
    queryParams: DeleteGoalQueryParams;
}
export declare class DeleteGoalResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    deleteGoal200ApplicationJsonObject?: DeleteGoal200ApplicationJson;
}
