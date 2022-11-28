import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendUploadShareLinkViaEmailPathParams extends SpeakeasyBase {
    shareId: number;
}
export declare class SendUploadShareLinkViaEmailHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class SendUploadShareLinkViaEmailRequest extends SpeakeasyBase {
    pathParams: SendUploadShareLinkViaEmailPathParams;
    headers: SendUploadShareLinkViaEmailHeaders;
    request: shared.UploadShareLinkEmail;
}
export declare class SendUploadShareLinkViaEmailResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
