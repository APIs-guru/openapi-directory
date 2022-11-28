import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteModelBiasJobDefinitionXAmzTargetEnum {
    SageMakerDeleteModelBiasJobDefinition = "SageMaker.DeleteModelBiasJobDefinition"
}
export declare class DeleteModelBiasJobDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteModelBiasJobDefinitionXAmzTargetEnum;
}
export declare class DeleteModelBiasJobDefinitionRequest extends SpeakeasyBase {
    headers: DeleteModelBiasJobDefinitionHeaders;
    request: shared.DeleteModelBiasJobDefinitionRequest;
}
export declare class DeleteModelBiasJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
}
