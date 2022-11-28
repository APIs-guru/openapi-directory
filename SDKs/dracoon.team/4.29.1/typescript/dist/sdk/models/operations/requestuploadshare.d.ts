import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestUploadSharePathParams extends SpeakeasyBase {
    shareId: number;
}
export declare class RequestUploadShareHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestUploadShareRequest extends SpeakeasyBase {
    pathParams: RequestUploadSharePathParams;
    headers: RequestUploadShareHeaders;
}
export declare class RequestUploadShareResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    uploadShare?: shared.UploadShare;
}
