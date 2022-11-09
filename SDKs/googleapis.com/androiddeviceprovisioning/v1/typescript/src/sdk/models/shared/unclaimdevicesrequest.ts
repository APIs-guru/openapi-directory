import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PartnerUnclaim } from "./partnerunclaim";


// UnclaimDevicesRequest
/** 
 * Request to unclaim devices asynchronously in batch.
**/
export class UnclaimDevicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=unclaims", elemType: shared.PartnerUnclaim })
  unclaims?: PartnerUnclaim[];
}
