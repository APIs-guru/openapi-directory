import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteModelQualityJobDefinitionXAmzTargetEnum {
    SageMakerDeleteModelQualityJobDefinition = "SageMaker.DeleteModelQualityJobDefinition"
}
export declare class DeleteModelQualityJobDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteModelQualityJobDefinitionXAmzTargetEnum;
}
export declare class DeleteModelQualityJobDefinitionRequest extends SpeakeasyBase {
    headers: DeleteModelQualityJobDefinitionHeaders;
    request: shared.DeleteModelQualityJobDefinitionRequest;
}
export declare class DeleteModelQualityJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
}
