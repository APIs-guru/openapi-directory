import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeInferenceSchedulerXAmzTargetEnum {
    AwsLookoutEquipmentFrontendServiceDescribeInferenceScheduler = "AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler"
}
export declare class DescribeInferenceSchedulerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInferenceSchedulerXAmzTargetEnum;
}
export declare class DescribeInferenceSchedulerRequest extends SpeakeasyBase {
    headers: DescribeInferenceSchedulerHeaders;
    request: shared.DescribeInferenceSchedulerRequest;
}
export declare class DescribeInferenceSchedulerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeInferenceSchedulerResponse?: shared.DescribeInferenceSchedulerResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
