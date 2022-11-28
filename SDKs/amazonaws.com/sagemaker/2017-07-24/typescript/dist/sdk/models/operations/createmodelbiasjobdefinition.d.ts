import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateModelBiasJobDefinitionXAmzTargetEnum {
    SageMakerCreateModelBiasJobDefinition = "SageMaker.CreateModelBiasJobDefinition"
}
export declare class CreateModelBiasJobDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateModelBiasJobDefinitionXAmzTargetEnum;
}
export declare class CreateModelBiasJobDefinitionRequest extends SpeakeasyBase {
    headers: CreateModelBiasJobDefinitionHeaders;
    request: shared.CreateModelBiasJobDefinitionRequest;
}
export declare class CreateModelBiasJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    createModelBiasJobDefinitionResponse?: shared.CreateModelBiasJobDefinitionResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
}
