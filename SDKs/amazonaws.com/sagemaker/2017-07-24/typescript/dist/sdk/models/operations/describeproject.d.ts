import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeProjectXAmzTargetEnum {
    SageMakerDescribeProject = "SageMaker.DescribeProject"
}
export declare class DescribeProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProjectXAmzTargetEnum;
}
export declare class DescribeProjectRequest extends SpeakeasyBase {
    headers: DescribeProjectHeaders;
    request: shared.DescribeProjectInput;
}
export declare class DescribeProjectResponse extends SpeakeasyBase {
    contentType: string;
    describeProjectOutput?: shared.DescribeProjectOutput;
    statusCode: number;
}
