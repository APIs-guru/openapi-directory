import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddDependentsForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class AddDependentsForTaskQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class AddDependentsForTaskRequestBody extends SpeakeasyBase {
    data?: shared.ModifyDependentsRequest;
}
export declare class AddDependentsForTask200ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskCompact[];
}
export declare class AddDependentsForTaskRequest extends SpeakeasyBase {
    pathParams: AddDependentsForTaskPathParams;
    queryParams: AddDependentsForTaskQueryParams;
    request: AddDependentsForTaskRequestBody;
}
export declare class AddDependentsForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    addDependentsForTask200ApplicationJsonObject?: AddDependentsForTask200ApplicationJson;
}
