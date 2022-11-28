import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeModelExplainabilityJobDefinitionXAmzTargetEnum {
    SageMakerDescribeModelExplainabilityJobDefinition = "SageMaker.DescribeModelExplainabilityJobDefinition"
}
export declare class DescribeModelExplainabilityJobDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeModelExplainabilityJobDefinitionXAmzTargetEnum;
}
export declare class DescribeModelExplainabilityJobDefinitionRequest extends SpeakeasyBase {
    headers: DescribeModelExplainabilityJobDefinitionHeaders;
    request: shared.DescribeModelExplainabilityJobDefinitionRequest;
}
export declare class DescribeModelExplainabilityJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    describeModelExplainabilityJobDefinitionResponse?: shared.DescribeModelExplainabilityJobDefinitionResponse;
    resourceNotFound?: any;
    statusCode: number;
}
