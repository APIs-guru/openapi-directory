import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestPublicDownloadShareInfoPathParams extends SpeakeasyBase {
    accessKey: string;
}
export declare class RequestPublicDownloadShareInfoHeaders extends SpeakeasyBase {
    xSdsDateFormat?: any;
}
export declare class RequestPublicDownloadShareInfoRequest extends SpeakeasyBase {
    pathParams: RequestPublicDownloadShareInfoPathParams;
    headers: RequestPublicDownloadShareInfoHeaders;
}
export declare class RequestPublicDownloadShareInfoResponseOutput extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    publicDownloadShare?: shared.PublicDownloadShareOutput;
    statusCode: number;
}
