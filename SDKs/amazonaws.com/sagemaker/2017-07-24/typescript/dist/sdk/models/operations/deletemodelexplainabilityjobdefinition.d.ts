import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteModelExplainabilityJobDefinitionXAmzTargetEnum {
    SageMakerDeleteModelExplainabilityJobDefinition = "SageMaker.DeleteModelExplainabilityJobDefinition"
}
export declare class DeleteModelExplainabilityJobDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteModelExplainabilityJobDefinitionXAmzTargetEnum;
}
export declare class DeleteModelExplainabilityJobDefinitionRequest extends SpeakeasyBase {
    headers: DeleteModelExplainabilityJobDefinitionHeaders;
    request: shared.DeleteModelExplainabilityJobDefinitionRequest;
}
export declare class DeleteModelExplainabilityJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
}
