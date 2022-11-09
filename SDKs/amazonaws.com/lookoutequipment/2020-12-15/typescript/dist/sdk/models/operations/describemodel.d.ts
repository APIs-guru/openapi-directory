import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeModelXAmzTargetEnum {
    AwsLookoutEquipmentFrontendServiceDescribeModel = "AWSLookoutEquipmentFrontendService.DescribeModel"
}
export declare class DescribeModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeModelXAmzTargetEnum;
}
export declare class DescribeModelRequest extends SpeakeasyBase {
    headers: DescribeModelHeaders;
    request: shared.DescribeModelRequest;
}
export declare class DescribeModelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeModelResponse?: shared.DescribeModelResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
