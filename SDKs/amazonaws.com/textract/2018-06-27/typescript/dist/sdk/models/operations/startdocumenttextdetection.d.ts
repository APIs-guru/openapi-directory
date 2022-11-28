import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartDocumentTextDetectionXAmzTargetEnum {
    TextractStartDocumentTextDetection = "Textract.StartDocumentTextDetection"
}
export declare class StartDocumentTextDetectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartDocumentTextDetectionXAmzTargetEnum;
}
export declare class StartDocumentTextDetectionRequest extends SpeakeasyBase {
    headers: StartDocumentTextDetectionHeaders;
    request: shared.StartDocumentTextDetectionRequest;
}
export declare class StartDocumentTextDetectionResponse extends SpeakeasyBase {
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
    startDocumentTextDetectionResponse?: shared.StartDocumentTextDetectionResponse;
    statusCode: number;
    throttlingException?: any;
    unsupportedDocumentException?: any;
}
