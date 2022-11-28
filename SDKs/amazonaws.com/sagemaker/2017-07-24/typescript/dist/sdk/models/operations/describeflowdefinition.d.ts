import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeFlowDefinitionXAmzTargetEnum {
    SageMakerDescribeFlowDefinition = "SageMaker.DescribeFlowDefinition"
}
export declare class DescribeFlowDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFlowDefinitionXAmzTargetEnum;
}
export declare class DescribeFlowDefinitionRequest extends SpeakeasyBase {
    headers: DescribeFlowDefinitionHeaders;
    request: shared.DescribeFlowDefinitionRequest;
}
export declare class DescribeFlowDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    describeFlowDefinitionResponse?: shared.DescribeFlowDefinitionResponse;
    resourceNotFound?: any;
    statusCode: number;
}
