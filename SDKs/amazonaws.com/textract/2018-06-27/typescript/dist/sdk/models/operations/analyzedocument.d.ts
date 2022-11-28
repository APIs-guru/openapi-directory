import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AnalyzeDocumentXAmzTargetEnum {
    TextractAnalyzeDocument = "Textract.AnalyzeDocument"
}
export declare class AnalyzeDocumentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AnalyzeDocumentXAmzTargetEnum;
}
export declare class AnalyzeDocumentRequest extends SpeakeasyBase {
    headers: AnalyzeDocumentHeaders;
    request: shared.AnalyzeDocumentRequest;
}
export declare class AnalyzeDocumentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    analyzeDocumentResponse?: shared.AnalyzeDocumentResponse;
    badDocumentException?: any;
    contentType: string;
    documentTooLargeException?: any;
    humanLoopQuotaExceededException?: any;
    internalServerError?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    provisionedThroughputExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    unsupportedDocumentException?: any;
}
