import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeFeatureTransformationXAmzTargetEnum {
    AmazonPersonalizeDescribeFeatureTransformation = "AmazonPersonalize.DescribeFeatureTransformation"
}
export declare class DescribeFeatureTransformationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFeatureTransformationXAmzTargetEnum;
}
export declare class DescribeFeatureTransformationRequest extends SpeakeasyBase {
    headers: DescribeFeatureTransformationHeaders;
    request: shared.DescribeFeatureTransformationRequest;
}
export declare class DescribeFeatureTransformationResponse extends SpeakeasyBase {
    contentType: string;
    describeFeatureTransformationResponse?: shared.DescribeFeatureTransformationResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
