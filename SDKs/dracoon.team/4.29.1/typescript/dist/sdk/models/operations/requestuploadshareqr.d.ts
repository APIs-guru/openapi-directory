import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestUploadShareQrPathParams extends SpeakeasyBase {
    shareId: number;
}
export declare class RequestUploadShareQrHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestUploadShareQrRequest extends SpeakeasyBase {
    pathParams: RequestUploadShareQrPathParams;
    headers: RequestUploadShareQrHeaders;
}
export declare class RequestUploadShareQrResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    uploadShare?: shared.UploadShare;
}
