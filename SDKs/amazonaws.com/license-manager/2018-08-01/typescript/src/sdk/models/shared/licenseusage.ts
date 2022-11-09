import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntitlementUsage } from "./entitlementusage";


// LicenseUsage
/** 
 * Describes the entitlement usage associated with a license.
**/
export class LicenseUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=EntitlementUsages", elemType: shared.EntitlementUsage })
  entitlementUsages?: EntitlementUsage[];
}
