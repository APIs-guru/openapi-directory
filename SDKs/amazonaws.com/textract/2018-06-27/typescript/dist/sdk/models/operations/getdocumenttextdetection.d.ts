import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDocumentTextDetectionXAmzTargetEnum {
    TextractGetDocumentTextDetection = "Textract.GetDocumentTextDetection"
}
export declare class GetDocumentTextDetectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDocumentTextDetectionXAmzTargetEnum;
}
export declare class GetDocumentTextDetectionRequest extends SpeakeasyBase {
    headers: GetDocumentTextDetectionHeaders;
    request: shared.GetDocumentTextDetectionRequest;
}
export declare class GetDocumentTextDetectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getDocumentTextDetectionResponse?: shared.GetDocumentTextDetectionResponse;
    internalServerError?: any;
    invalidJobIdException?: any;
    invalidKmsKeyException?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    provisionedThroughputExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
