import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PartnerClaim } from "./partnerclaim";


// ClaimDevicesRequest
/** 
 * Request to claim devices asynchronously in batch. Claiming a device adds the device to zero-touch enrollment and shows the device in the customer's view of the portal.
**/
export class ClaimDevicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=claims", elemType: shared.PartnerClaim })
  claims?: PartnerClaim[];
}
