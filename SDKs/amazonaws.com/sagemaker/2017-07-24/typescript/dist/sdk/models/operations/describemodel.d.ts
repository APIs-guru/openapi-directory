import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeModelXAmzTargetEnum {
    SageMakerDescribeModel = "SageMaker.DescribeModel"
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
    request: shared.DescribeModelInput;
}
export declare class DescribeModelResponse extends SpeakeasyBase {
    contentType: string;
    describeModelOutput?: shared.DescribeModelOutput;
    statusCode: number;
}
