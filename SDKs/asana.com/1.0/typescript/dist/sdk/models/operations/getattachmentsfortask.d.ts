import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAttachmentsForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class GetAttachmentsForTaskQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetAttachmentsForTask200ApplicationJson extends SpeakeasyBase {
    data?: shared.AttachmentCompact[];
}
export declare class GetAttachmentsForTaskRequest extends SpeakeasyBase {
    pathParams: GetAttachmentsForTaskPathParams;
    queryParams: GetAttachmentsForTaskQueryParams;
}
export declare class GetAttachmentsForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getAttachmentsForTask200ApplicationJsonObject?: GetAttachmentsForTask200ApplicationJson;
}
