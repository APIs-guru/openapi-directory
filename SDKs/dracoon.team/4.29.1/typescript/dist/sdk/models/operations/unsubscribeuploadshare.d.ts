import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnsubscribeUploadSharePathParams extends SpeakeasyBase {
    shareId: number;
}
export declare class UnsubscribeUploadShareHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UnsubscribeUploadShareRequest extends SpeakeasyBase {
    pathParams: UnsubscribeUploadSharePathParams;
    headers: UnsubscribeUploadShareHeaders;
}
export declare class UnsubscribeUploadShareResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
