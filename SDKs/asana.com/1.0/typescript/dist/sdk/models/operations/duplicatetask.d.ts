import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DuplicateTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class DuplicateTaskQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class DuplicateTaskRequestBody extends SpeakeasyBase {
    data?: shared.TaskDuplicateRequest;
}
export declare class DuplicateTask201ApplicationJson extends SpeakeasyBase {
    data?: shared.JobResponse;
}
export declare class DuplicateTaskRequest extends SpeakeasyBase {
    pathParams: DuplicateTaskPathParams;
    queryParams: DuplicateTaskQueryParams;
    request: DuplicateTaskRequestBody;
}
export declare class DuplicateTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    duplicateTask201ApplicationJsonObject?: DuplicateTask201ApplicationJson;
}
