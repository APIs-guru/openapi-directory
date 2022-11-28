import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Accelerator } from "./accelerator";
import { AttachedDisk } from "./attacheddisk";


export enum InstancePolicyProvisioningModelEnum {
    ProvisioningModelUnspecified = "PROVISIONING_MODEL_UNSPECIFIED",
    Standard = "STANDARD",
    Spot = "SPOT",
    Preemptible = "PREEMPTIBLE"
}


// InstancePolicy
/** 
 * InstancePolicy describes an instance type and resources attached to each VM created by this InstancePolicy.
**/
export class InstancePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accelerators", elemType: Accelerator })
  accelerators?: Accelerator[];

  @SpeakeasyMetadata({ data: "json, name=disks", elemType: AttachedDisk })
  disks?: AttachedDisk[];

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=minCpuPlatform" })
  minCpuPlatform?: string;

  @SpeakeasyMetadata({ data: "json, name=provisioningModel" })
  provisioningModel?: InstancePolicyProvisioningModelEnum;
}
