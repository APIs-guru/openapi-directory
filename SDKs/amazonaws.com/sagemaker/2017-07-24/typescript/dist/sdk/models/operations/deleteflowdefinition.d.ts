import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteFlowDefinitionXAmzTargetEnum {
    SageMakerDeleteFlowDefinition = "SageMaker.DeleteFlowDefinition"
}
export declare class DeleteFlowDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFlowDefinitionXAmzTargetEnum;
}
export declare class DeleteFlowDefinitionRequest extends SpeakeasyBase {
    headers: DeleteFlowDefinitionHeaders;
    request: shared.DeleteFlowDefinitionRequest;
}
export declare class DeleteFlowDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    deleteFlowDefinitionResponse?: Map<string, any>;
    resourceInUse?: any;
    resourceNotFound?: any;
    statusCode: number;
}
