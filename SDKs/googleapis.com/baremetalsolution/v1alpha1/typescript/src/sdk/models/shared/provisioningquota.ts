import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceQuota } from "./instancequota";



// ProvisioningQuota
/** 
 * A provisioning quota for a given project.
**/
export class ProvisioningQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceQuota" })
  instanceQuota?: InstanceQuota;
}
