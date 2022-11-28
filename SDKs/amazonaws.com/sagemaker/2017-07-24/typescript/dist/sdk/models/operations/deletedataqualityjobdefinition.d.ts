import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDataQualityJobDefinitionXAmzTargetEnum {
    SageMakerDeleteDataQualityJobDefinition = "SageMaker.DeleteDataQualityJobDefinition"
}
export declare class DeleteDataQualityJobDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDataQualityJobDefinitionXAmzTargetEnum;
}
export declare class DeleteDataQualityJobDefinitionRequest extends SpeakeasyBase {
    headers: DeleteDataQualityJobDefinitionHeaders;
    request: shared.DeleteDataQualityJobDefinitionRequest;
}
export declare class DeleteDataQualityJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
}
