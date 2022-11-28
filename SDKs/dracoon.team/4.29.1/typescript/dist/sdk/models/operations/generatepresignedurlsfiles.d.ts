import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GeneratePresignedUrlsFilesPathParams extends SpeakeasyBase {
    uploadId: string;
}
export declare class GeneratePresignedUrlsFilesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class GeneratePresignedUrlsFilesRequest extends SpeakeasyBase {
    pathParams: GeneratePresignedUrlsFilesPathParams;
    headers: GeneratePresignedUrlsFilesHeaders;
    request: shared.GeneratePresignedUrlsRequest;
}
export declare class GeneratePresignedUrlsFilesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    presignedUrlList?: shared.PresignedUrlList;
    statusCode: number;
}
