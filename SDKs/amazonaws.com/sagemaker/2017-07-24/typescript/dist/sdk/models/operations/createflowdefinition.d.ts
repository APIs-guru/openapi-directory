import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateFlowDefinitionXAmzTargetEnum {
    SageMakerCreateFlowDefinition = "SageMaker.CreateFlowDefinition"
}
export declare class CreateFlowDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFlowDefinitionXAmzTargetEnum;
}
export declare class CreateFlowDefinitionRequest extends SpeakeasyBase {
    headers: CreateFlowDefinitionHeaders;
    request: shared.CreateFlowDefinitionRequest;
}
export declare class CreateFlowDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    createFlowDefinitionResponse?: shared.CreateFlowDefinitionResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
}
