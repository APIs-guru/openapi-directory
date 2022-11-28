import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenerateDownloadUrlPublicPathParams extends SpeakeasyBase {
    accessKey: string;
}
export declare class GenerateDownloadUrlPublicRequest extends SpeakeasyBase {
    pathParams: GenerateDownloadUrlPublicPathParams;
    request: shared.PublicDownloadTokenGenerateRequest;
}
export declare class GenerateDownloadUrlPublicResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    publicDownloadTokenGenerateResponse?: shared.PublicDownloadTokenGenerateResponse;
    statusCode: number;
}
