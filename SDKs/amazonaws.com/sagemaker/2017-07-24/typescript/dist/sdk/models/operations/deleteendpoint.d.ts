import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteEndpointXAmzTargetEnum {
    SageMakerDeleteEndpoint = "SageMaker.DeleteEndpoint"
}
export declare class DeleteEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEndpointXAmzTargetEnum;
}
export declare class DeleteEndpointRequest extends SpeakeasyBase {
    headers: DeleteEndpointHeaders;
    request: shared.DeleteEndpointInput;
}
export declare class DeleteEndpointResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
