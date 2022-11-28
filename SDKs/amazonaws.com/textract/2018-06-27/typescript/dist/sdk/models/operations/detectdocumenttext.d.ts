import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetectDocumentTextXAmzTargetEnum {
    TextractDetectDocumentText = "Textract.DetectDocumentText"
}
export declare class DetectDocumentTextHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectDocumentTextXAmzTargetEnum;
}
export declare class DetectDocumentTextRequest extends SpeakeasyBase {
    headers: DetectDocumentTextHeaders;
    request: shared.DetectDocumentTextRequest;
}
export declare class DetectDocumentTextResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badDocumentException?: any;
    contentType: string;
    detectDocumentTextResponse?: shared.DetectDocumentTextResponse;
    documentTooLargeException?: any;
    internalServerError?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    provisionedThroughputExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    unsupportedDocumentException?: any;
}
