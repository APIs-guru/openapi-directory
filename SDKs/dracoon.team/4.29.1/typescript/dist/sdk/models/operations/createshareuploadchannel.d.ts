import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateShareUploadChannelPathParams extends SpeakeasyBase {
    accessKey: string;
}
export declare class CreateShareUploadChannelRequest extends SpeakeasyBase {
    pathParams: CreateShareUploadChannelPathParams;
    request: shared.CreateShareUploadChannelRequest;
}
export declare class CreateShareUploadChannelResponse extends SpeakeasyBase {
    contentType: string;
    createShareUploadChannelResponse?: shared.CreateShareUploadChannelResponse;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
