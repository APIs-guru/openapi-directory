import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateUploadShareHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class CreateUploadShareRequest extends SpeakeasyBase {
    headers: CreateUploadShareHeaders;
    request: shared.CreateUploadShareRequest;
}
export declare class CreateUploadShareResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    uploadShare?: shared.UploadShare;
    createUploadShare400ApplicationJsonOneOf?: any;
}
