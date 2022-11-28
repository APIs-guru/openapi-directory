import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveDependentsForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class RemoveDependentsForTaskQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class RemoveDependentsForTaskRequestBody extends SpeakeasyBase {
    data?: shared.ModifyDependentsRequest;
}
export declare class RemoveDependentsForTask200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>[];
}
export declare class RemoveDependentsForTaskRequest extends SpeakeasyBase {
    pathParams: RemoveDependentsForTaskPathParams;
    queryParams: RemoveDependentsForTaskQueryParams;
    request: RemoveDependentsForTaskRequestBody;
}
export declare class RemoveDependentsForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    removeDependentsForTask200ApplicationJsonObject?: RemoveDependentsForTask200ApplicationJson;
}
