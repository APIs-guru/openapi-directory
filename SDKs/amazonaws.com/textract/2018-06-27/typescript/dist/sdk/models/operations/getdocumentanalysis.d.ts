import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDocumentAnalysisXAmzTargetEnum {
    TextractGetDocumentAnalysis = "Textract.GetDocumentAnalysis"
}
export declare class GetDocumentAnalysisHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDocumentAnalysisXAmzTargetEnum;
}
export declare class GetDocumentAnalysisRequest extends SpeakeasyBase {
    headers: GetDocumentAnalysisHeaders;
    request: shared.GetDocumentAnalysisRequest;
}
export declare class GetDocumentAnalysisResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getDocumentAnalysisResponse?: shared.GetDocumentAnalysisResponse;
    internalServerError?: any;
    invalidJobIdException?: any;
    invalidKmsKeyException?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    provisionedThroughputExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
