import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUploadSharePathParams extends SpeakeasyBase {
    shareId: number;
}
export declare class UpdateUploadShareHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class UpdateUploadShareRequest extends SpeakeasyBase {
    pathParams: UpdateUploadSharePathParams;
    headers: UpdateUploadShareHeaders;
    request: shared.UpdateUploadShareRequest;
}
export declare class UpdateUploadShareResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    uploadShare?: shared.UploadShare;
    updateUploadShare400ApplicationJsonOneOf?: any;
}
