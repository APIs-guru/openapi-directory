import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartnerUnclaim } from "./partnerunclaim";



// UnclaimDevicesRequest
/** 
 * Request to unclaim devices asynchronously in batch.
**/
export class UnclaimDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unclaims", elemType: PartnerUnclaim })
  unclaims?: PartnerUnclaim[];
}
