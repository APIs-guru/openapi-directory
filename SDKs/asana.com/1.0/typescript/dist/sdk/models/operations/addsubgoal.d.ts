import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddSubgoalPathParams extends SpeakeasyBase {
    goalGid: string;
}
export declare class AddSubgoalQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class AddSubgoalRequestBody extends SpeakeasyBase {
    data?: shared.GoalAddSubgoalRequest;
}
export declare class AddSubgoal200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class AddSubgoalRequest extends SpeakeasyBase {
    pathParams: AddSubgoalPathParams;
    queryParams: AddSubgoalQueryParams;
    request: AddSubgoalRequestBody;
}
export declare class AddSubgoalResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    addSubgoal200ApplicationJsonObject?: AddSubgoal200ApplicationJson;
}
