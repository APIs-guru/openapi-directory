import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateEndpointXAmzTargetEnum {
    SageMakerUpdateEndpoint = "SageMaker.UpdateEndpoint"
}
export declare class UpdateEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEndpointXAmzTargetEnum;
}
export declare class UpdateEndpointRequest extends SpeakeasyBase {
    headers: UpdateEndpointHeaders;
    request: shared.UpdateEndpointInput;
}
export declare class UpdateEndpointResponse extends SpeakeasyBase {
    contentType: string;
    resourceLimitExceeded?: any;
    statusCode: number;
    updateEndpointOutput?: shared.UpdateEndpointOutput;
}
