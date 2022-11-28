import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendDownloadShareLinkViaEmailPathParams extends SpeakeasyBase {
    shareId: number;
}
export declare class SendDownloadShareLinkViaEmailHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class SendDownloadShareLinkViaEmailRequest extends SpeakeasyBase {
    pathParams: SendDownloadShareLinkViaEmailPathParams;
    headers: SendDownloadShareLinkViaEmailHeaders;
    request: shared.DownloadShareLinkEmail;
}
export declare class SendDownloadShareLinkViaEmailResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
