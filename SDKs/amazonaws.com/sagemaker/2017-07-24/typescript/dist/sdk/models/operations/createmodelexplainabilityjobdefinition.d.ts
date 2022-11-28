import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateModelExplainabilityJobDefinitionXAmzTargetEnum {
    SageMakerCreateModelExplainabilityJobDefinition = "SageMaker.CreateModelExplainabilityJobDefinition"
}
export declare class CreateModelExplainabilityJobDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateModelExplainabilityJobDefinitionXAmzTargetEnum;
}
export declare class CreateModelExplainabilityJobDefinitionRequest extends SpeakeasyBase {
    headers: CreateModelExplainabilityJobDefinitionHeaders;
    request: shared.CreateModelExplainabilityJobDefinitionRequest;
}
export declare class CreateModelExplainabilityJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    createModelExplainabilityJobDefinitionResponse?: shared.CreateModelExplainabilityJobDefinitionResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
}
