import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceQuota } from "./instancequota";


// ProvisioningQuota
/** 
 * A provisioning quota for a given project.
**/
export class ProvisioningQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceQuota" })
  instanceQuota?: InstanceQuota;
}
