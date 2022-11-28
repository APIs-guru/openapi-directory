import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AnalyzeExpenseXAmzTargetEnum {
    TextractAnalyzeExpense = "Textract.AnalyzeExpense"
}
export declare class AnalyzeExpenseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AnalyzeExpenseXAmzTargetEnum;
}
export declare class AnalyzeExpenseRequest extends SpeakeasyBase {
    headers: AnalyzeExpenseHeaders;
    request: shared.AnalyzeExpenseRequest;
}
export declare class AnalyzeExpenseResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    analyzeExpenseResponse?: shared.AnalyzeExpenseResponse;
    badDocumentException?: any;
    contentType: string;
    documentTooLargeException?: any;
    internalServerError?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    provisionedThroughputExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    unsupportedDocumentException?: any;
}
