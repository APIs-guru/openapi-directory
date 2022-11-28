import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApproveDecision } from "./approvedecision";
import { DismissDecision } from "./dismissdecision";
import { AccessLocations } from "./accesslocations";
import { AccessReason } from "./accessreason";
import { ResourceProperties } from "./resourceproperties";



// ApprovalRequest
/** 
 * A request for the customer to approve access to a resource.
**/
export class ApprovalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approve" })
  approve?: ApproveDecision;

  @SpeakeasyMetadata({ data: "json, name=dismiss" })
  dismiss?: DismissDecision;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=requestTime" })
  requestTime?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedExpiration" })
  requestedExpiration?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedLocations" })
  requestedLocations?: AccessLocations;

  @SpeakeasyMetadata({ data: "json, name=requestedReason" })
  requestedReason?: AccessReason;

  @SpeakeasyMetadata({ data: "json, name=requestedResourceName" })
  requestedResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedResourceProperties" })
  requestedResourceProperties?: ResourceProperties;
}
