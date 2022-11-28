import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateEndpointWeightsAndCapacitiesXAmzTargetEnum {
    SageMakerUpdateEndpointWeightsAndCapacities = "SageMaker.UpdateEndpointWeightsAndCapacities"
}
export declare class UpdateEndpointWeightsAndCapacitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEndpointWeightsAndCapacitiesXAmzTargetEnum;
}
export declare class UpdateEndpointWeightsAndCapacitiesRequest extends SpeakeasyBase {
    headers: UpdateEndpointWeightsAndCapacitiesHeaders;
    request: shared.UpdateEndpointWeightsAndCapacitiesInput;
}
export declare class UpdateEndpointWeightsAndCapacitiesResponse extends SpeakeasyBase {
    contentType: string;
    resourceLimitExceeded?: any;
    statusCode: number;
    updateEndpointWeightsAndCapacitiesOutput?: shared.UpdateEndpointWeightsAndCapacitiesOutput;
}
