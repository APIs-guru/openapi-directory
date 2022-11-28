import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAttachmentForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class CreateAttachmentForTaskQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreateAttachmentForTask200ApplicationJson extends SpeakeasyBase {
    data?: shared.AttachmentResponse;
}
export declare class CreateAttachmentForTaskRequest extends SpeakeasyBase {
    pathParams: CreateAttachmentForTaskPathParams;
    queryParams: CreateAttachmentForTaskQueryParams;
    request: shared.AttachmentRequest;
}
export declare class CreateAttachmentForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createAttachmentForTask200ApplicationJsonObject?: CreateAttachmentForTask200ApplicationJson;
}
