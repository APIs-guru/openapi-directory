import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGoalsQueryParams extends SpeakeasyBase {
    isWorkspaceLevel?: boolean;
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
    portfolio?: string;
    project?: string;
    team?: string;
    timePeriods?: string[];
    workspace?: string;
}
export declare class GetGoals200ApplicationJson extends SpeakeasyBase {
    data?: shared.GoalCompact[];
}
export declare class GetGoalsRequest extends SpeakeasyBase {
    queryParams: GetGoalsQueryParams;
}
export declare class GetGoalsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getGoals200ApplicationJsonObject?: GetGoals200ApplicationJson;
}
