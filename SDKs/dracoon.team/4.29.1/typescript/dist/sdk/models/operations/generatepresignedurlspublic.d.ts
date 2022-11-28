import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GeneratePresignedUrlsPublicPathParams extends SpeakeasyBase {
    accessKey: string;
    uploadId: string;
}
export declare class GeneratePresignedUrlsPublicHeaders extends SpeakeasyBase {
    xSdsDateFormat?: any;
}
export declare class GeneratePresignedUrlsPublicRequest extends SpeakeasyBase {
    pathParams: GeneratePresignedUrlsPublicPathParams;
    headers: GeneratePresignedUrlsPublicHeaders;
    request: shared.GeneratePresignedUrlsRequest;
}
export declare class GeneratePresignedUrlsPublicResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    presignedUrlList?: shared.PresignedUrlList;
    statusCode: number;
}
