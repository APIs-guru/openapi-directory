import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeEndpointXAmzTargetEnum {
    SageMakerDescribeEndpoint = "SageMaker.DescribeEndpoint"
}
export declare class DescribeEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEndpointXAmzTargetEnum;
}
export declare class DescribeEndpointRequest extends SpeakeasyBase {
    headers: DescribeEndpointHeaders;
    request: shared.DescribeEndpointInput;
}
export declare class DescribeEndpointResponse extends SpeakeasyBase {
    contentType: string;
    describeEndpointOutput?: shared.DescribeEndpointOutput;
    statusCode: number;
}
