import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestPublicUploadShareInfoPathParams extends SpeakeasyBase {
    accessKey: string;
}
export declare class RequestPublicUploadShareInfoHeaders extends SpeakeasyBase {
    xSdsDateFormat?: any;
    xSdsSharePassword?: string;
}
export declare class RequestPublicUploadShareInfoRequest extends SpeakeasyBase {
    pathParams: RequestPublicUploadShareInfoPathParams;
    headers: RequestPublicUploadShareInfoHeaders;
}
export declare class RequestPublicUploadShareInfoResponseOutput extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    publicUploadShare?: shared.PublicUploadShareOutput;
    statusCode: number;
}
