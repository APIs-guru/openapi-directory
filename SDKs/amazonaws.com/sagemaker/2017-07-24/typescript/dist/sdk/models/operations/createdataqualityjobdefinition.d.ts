import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDataQualityJobDefinitionXAmzTargetEnum {
    SageMakerCreateDataQualityJobDefinition = "SageMaker.CreateDataQualityJobDefinition"
}
export declare class CreateDataQualityJobDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDataQualityJobDefinitionXAmzTargetEnum;
}
export declare class CreateDataQualityJobDefinitionRequest extends SpeakeasyBase {
    headers: CreateDataQualityJobDefinitionHeaders;
    request: shared.CreateDataQualityJobDefinitionRequest;
}
export declare class CreateDataQualityJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    createDataQualityJobDefinitionResponse?: shared.CreateDataQualityJobDefinitionResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
}
