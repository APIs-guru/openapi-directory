import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeEndpointConfigXAmzTargetEnum {
    SageMakerDescribeEndpointConfig = "SageMaker.DescribeEndpointConfig"
}
export declare class DescribeEndpointConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEndpointConfigXAmzTargetEnum;
}
export declare class DescribeEndpointConfigRequest extends SpeakeasyBase {
    headers: DescribeEndpointConfigHeaders;
    request: shared.DescribeEndpointConfigInput;
}
export declare class DescribeEndpointConfigResponse extends SpeakeasyBase {
    contentType: string;
    describeEndpointConfigOutput?: shared.DescribeEndpointConfigOutput;
    statusCode: number;
}
