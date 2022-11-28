import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeStreamProcessorXAmzTargetEnum {
    RekognitionServiceDescribeStreamProcessor = "RekognitionService.DescribeStreamProcessor"
}
export declare class DescribeStreamProcessorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStreamProcessorXAmzTargetEnum;
}
export declare class DescribeStreamProcessorRequest extends SpeakeasyBase {
    headers: DescribeStreamProcessorHeaders;
    request: shared.DescribeStreamProcessorRequest;
}
export declare class DescribeStreamProcessorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeStreamProcessorResponse?: shared.DescribeStreamProcessorResponse;
    internalServerError?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
