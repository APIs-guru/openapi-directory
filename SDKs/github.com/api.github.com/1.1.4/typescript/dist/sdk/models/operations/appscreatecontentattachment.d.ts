import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsCreateContentAttachmentPathParams extends SpeakeasyBase {
    contentReferenceId: number;
}
export declare class AppsCreateContentAttachmentRequestBody extends SpeakeasyBase {
    body: string;
    title: string;
}
export declare class AppsCreateContentAttachment415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class AppsCreateContentAttachmentRequest extends SpeakeasyBase {
    pathParams: AppsCreateContentAttachmentPathParams;
    request?: AppsCreateContentAttachmentRequestBody;
}
export declare class AppsCreateContentAttachmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appsCreateContentAttachment415ApplicationJsonObject?: AppsCreateContentAttachment415ApplicationJson;
    basicError?: shared.BasicError;
    contentReferenceAttachment?: shared.ContentReferenceAttachment;
    validationError?: shared.ValidationError;
}
