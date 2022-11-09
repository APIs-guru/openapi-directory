import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetRoutingControlStateXAmzTargetEnum {
    ToggleCustomerApiGetRoutingControlState = "ToggleCustomerAPI.GetRoutingControlState"
}
export declare class GetRoutingControlStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRoutingControlStateXAmzTargetEnum;
}
export declare class GetRoutingControlStateRequest extends SpeakeasyBase {
    headers: GetRoutingControlStateHeaders;
    request: shared.GetRoutingControlStateRequest;
}
export declare class GetRoutingControlStateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    endpointTemporarilyUnavailableException?: any;
    getRoutingControlStateResponse?: shared.GetRoutingControlStateResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
