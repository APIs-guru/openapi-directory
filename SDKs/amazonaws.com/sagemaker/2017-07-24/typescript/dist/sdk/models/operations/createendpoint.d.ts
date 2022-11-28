import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateEndpointXAmzTargetEnum {
    SageMakerCreateEndpoint = "SageMaker.CreateEndpoint"
}
export declare class CreateEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEndpointXAmzTargetEnum;
}
export declare class CreateEndpointRequest extends SpeakeasyBase {
    headers: CreateEndpointHeaders;
    request: shared.CreateEndpointInput;
}
export declare class CreateEndpointResponse extends SpeakeasyBase {
    contentType: string;
    createEndpointOutput?: shared.CreateEndpointOutput;
    resourceLimitExceeded?: any;
    statusCode: number;
}
