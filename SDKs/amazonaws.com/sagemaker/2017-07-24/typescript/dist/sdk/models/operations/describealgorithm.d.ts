import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAlgorithmXAmzTargetEnum {
    SageMakerDescribeAlgorithm = "SageMaker.DescribeAlgorithm"
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
    request: shared.DescribeAlgorithmInput;
}
export declare class DescribeAlgorithmResponse extends SpeakeasyBase {
    contentType: string;
    describeAlgorithmOutput?: shared.DescribeAlgorithmOutput;
    statusCode: number;
}
