import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class DeleteTaskQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class DeleteTask200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class DeleteTaskRequest extends SpeakeasyBase {
    pathParams: DeleteTaskPathParams;
    queryParams: DeleteTaskQueryParams;
}
export declare class DeleteTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    deleteTask200ApplicationJsonObject?: DeleteTask200ApplicationJson;
}
