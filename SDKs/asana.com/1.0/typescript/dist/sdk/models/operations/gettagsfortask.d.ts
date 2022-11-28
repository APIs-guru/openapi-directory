import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class GetTagsForTaskQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetTagsForTask200ApplicationJson extends SpeakeasyBase {
    data?: shared.TagCompact[];
}
export declare class GetTagsForTaskRequest extends SpeakeasyBase {
    pathParams: GetTagsForTaskPathParams;
    queryParams: GetTagsForTaskQueryParams;
}
export declare class GetTagsForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTagsForTask200ApplicationJsonObject?: GetTagsForTask200ApplicationJson;
}
