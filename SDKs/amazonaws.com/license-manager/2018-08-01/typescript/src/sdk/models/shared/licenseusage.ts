import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntitlementUsage } from "./entitlementusage";



// LicenseUsage
/** 
 * Describes the entitlement usage associated with a license.
**/
export class LicenseUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EntitlementUsages", elemType: EntitlementUsage })
  entitlementUsages?: EntitlementUsage[];
}
