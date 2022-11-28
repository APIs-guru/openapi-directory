import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateEndpointConfigXAmzTargetEnum {
    SageMakerCreateEndpointConfig = "SageMaker.CreateEndpointConfig"
}
export declare class CreateEndpointConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEndpointConfigXAmzTargetEnum;
}
export declare class CreateEndpointConfigRequest extends SpeakeasyBase {
    headers: CreateEndpointConfigHeaders;
    request: shared.CreateEndpointConfigInput;
}
export declare class CreateEndpointConfigResponse extends SpeakeasyBase {
    contentType: string;
    createEndpointConfigOutput?: shared.CreateEndpointConfigOutput;
    resourceLimitExceeded?: any;
    statusCode: number;
}
