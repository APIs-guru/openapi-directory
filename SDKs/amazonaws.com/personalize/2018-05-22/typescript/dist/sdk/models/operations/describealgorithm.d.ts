import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeAlgorithmXAmzTargetEnum {
    AmazonPersonalizeDescribeAlgorithm = "AmazonPersonalize.DescribeAlgorithm"
}
export declare class DescribeAlgorithmHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAlgorithmXAmzTargetEnum;
}
export declare class DescribeAlgorithmRequest extends SpeakeasyBase {
    headers: DescribeAlgorithmHeaders;
    request: shared.DescribeAlgorithmRequest;
}
export declare class DescribeAlgorithmResponse extends SpeakeasyBase {
    contentType: string;
    describeAlgorithmResponse?: shared.DescribeAlgorithmResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
