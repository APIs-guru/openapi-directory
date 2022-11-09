import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=approve" })
  approve?: ApproveDecision;

  @Metadata({ data: "json, name=dismiss" })
  dismiss?: DismissDecision;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=requestTime" })
  requestTime?: string;

  @Metadata({ data: "json, name=requestedExpiration" })
  requestedExpiration?: string;

  @Metadata({ data: "json, name=requestedLocations" })
  requestedLocations?: AccessLocations;

  @Metadata({ data: "json, name=requestedReason" })
  requestedReason?: AccessReason;

  @Metadata({ data: "json, name=requestedResourceName" })
  requestedResourceName?: string;

  @Metadata({ data: "json, name=requestedResourceProperties" })
  requestedResourceProperties?: ResourceProperties;
}
