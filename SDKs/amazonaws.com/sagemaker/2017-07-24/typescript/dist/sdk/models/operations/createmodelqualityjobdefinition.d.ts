import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateModelQualityJobDefinitionXAmzTargetEnum {
    SageMakerCreateModelQualityJobDefinition = "SageMaker.CreateModelQualityJobDefinition"
}
export declare class CreateModelQualityJobDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateModelQualityJobDefinitionXAmzTargetEnum;
}
export declare class CreateModelQualityJobDefinitionRequest extends SpeakeasyBase {
    headers: CreateModelQualityJobDefinitionHeaders;
    request: shared.CreateModelQualityJobDefinitionRequest;
}
export declare class CreateModelQualityJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    createModelQualityJobDefinitionResponse?: shared.CreateModelQualityJobDefinitionResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
}
