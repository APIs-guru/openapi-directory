import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartnerClaim } from "./partnerclaim";



// ClaimDevicesRequest
/** 
 * Request to claim devices asynchronously in batch. Claiming a device adds the device to zero-touch enrollment and shows the device in the customer's view of the portal.
**/
export class ClaimDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=claims", elemType: PartnerClaim })
  claims?: PartnerClaim[];
}
