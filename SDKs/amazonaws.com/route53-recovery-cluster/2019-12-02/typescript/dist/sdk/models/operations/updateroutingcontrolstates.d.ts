import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateRoutingControlStatesXAmzTargetEnum {
    ToggleCustomerApiUpdateRoutingControlStates = "ToggleCustomerAPI.UpdateRoutingControlStates"
}
export declare class UpdateRoutingControlStatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRoutingControlStatesXAmzTargetEnum;
}
export declare class UpdateRoutingControlStatesRequest extends SpeakeasyBase {
    headers: UpdateRoutingControlStatesHeaders;
    request: shared.UpdateRoutingControlStatesRequest;
}
export declare class UpdateRoutingControlStatesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    endpointTemporarilyUnavailableException?: any;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateRoutingControlStatesResponse?: Map<string, any>;
    validationException?: any;
}
