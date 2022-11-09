import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PartnerUnclaim } from "./partnerunclaim";
/**
 * Request to unclaim devices asynchronously in batch.
**/
export declare class UnclaimDevicesRequest extends SpeakeasyBase {
    unclaims?: PartnerUnclaim[];
}
