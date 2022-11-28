import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStoriesForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class GetStoriesForTaskQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetStoriesForTask200ApplicationJson extends SpeakeasyBase {
    data?: any;
}
export declare class GetStoriesForTaskRequest extends SpeakeasyBase {
    pathParams: GetStoriesForTaskPathParams;
    queryParams: GetStoriesForTaskQueryParams;
}
export declare class GetStoriesForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getStoriesForTask200ApplicationJsonObject?: GetStoriesForTask200ApplicationJson;
}
