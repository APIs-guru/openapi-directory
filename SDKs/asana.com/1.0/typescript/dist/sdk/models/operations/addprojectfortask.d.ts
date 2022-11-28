import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddProjectForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class AddProjectForTaskQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class AddProjectForTaskRequestBody extends SpeakeasyBase {
    data?: shared.TaskAddProjectRequest;
}
export declare class AddProjectForTask200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class AddProjectForTaskRequest extends SpeakeasyBase {
    pathParams: AddProjectForTaskPathParams;
    queryParams: AddProjectForTaskQueryParams;
    request: AddProjectForTaskRequestBody;
}
export declare class AddProjectForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    addProjectForTask200ApplicationJsonObject?: AddProjectForTask200ApplicationJson;
}
