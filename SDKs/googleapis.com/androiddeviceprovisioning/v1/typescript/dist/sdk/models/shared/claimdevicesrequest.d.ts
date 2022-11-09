import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PartnerClaim } from "./partnerclaim";
/**
 * Request to claim devices asynchronously in batch. Claiming a device adds the device to zero-touch enrollment and shows the device in the customer's view of the portal.
**/
export declare class ClaimDevicesRequest extends SpeakeasyBase {
    claims?: PartnerClaim[];
}
