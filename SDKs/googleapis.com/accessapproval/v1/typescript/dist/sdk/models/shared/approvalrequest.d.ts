import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApproveDecision } from "./approvedecision";
import { DismissDecision } from "./dismissdecision";
import { AccessLocations } from "./accesslocations";
import { AccessReason } from "./accessreason";
import { ResourceProperties } from "./resourceproperties";
/**
 * A request for the customer to approve access to a resource.
**/
export declare class ApprovalRequest extends SpeakeasyBase {
    approve?: ApproveDecision;
    dismiss?: DismissDecision;
    name?: string;
    requestTime?: string;
    requestedExpiration?: string;
    requestedLocations?: AccessLocations;
    requestedReason?: AccessReason;
    requestedResourceName?: string;
    requestedResourceProperties?: ResourceProperties;
}
