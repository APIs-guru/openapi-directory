import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateRoutingControlStateXAmzTargetEnum {
    ToggleCustomerApiUpdateRoutingControlState = "ToggleCustomerAPI.UpdateRoutingControlState"
}
export declare class UpdateRoutingControlStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRoutingControlStateXAmzTargetEnum;
}
export declare class UpdateRoutingControlStateRequest extends SpeakeasyBase {
    headers: UpdateRoutingControlStateHeaders;
    request: shared.UpdateRoutingControlStateRequest;
}
export declare class UpdateRoutingControlStateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    endpointTemporarilyUnavailableException?: any;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateRoutingControlStateResponse?: Map<string, any>;
    validationException?: any;
}
