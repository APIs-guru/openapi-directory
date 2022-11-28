import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartDocumentAnalysisXAmzTargetEnum {
    TextractStartDocumentAnalysis = "Textract.StartDocumentAnalysis"
}
export declare class StartDocumentAnalysisHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartDocumentAnalysisXAmzTargetEnum;
}
export declare class StartDocumentAnalysisRequest extends SpeakeasyBase {
    headers: StartDocumentAnalysisHeaders;
    request: shared.StartDocumentAnalysisRequest;
}
export declare class StartDocumentAnalysisResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badDocumentException?: any;
    contentType: string;
    documentTooLargeException?: any;
    idempotentParameterMismatchException?: any;
    internalServerError?: any;
    invalidKmsKeyException?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    limitExceededException?: any;
    provisionedThroughputExceededException?: any;
    startDocumentAnalysisResponse?: shared.StartDocumentAnalysisResponse;
    statusCode: number;
    throttlingException?: any;
    unsupportedDocumentException?: any;
}
