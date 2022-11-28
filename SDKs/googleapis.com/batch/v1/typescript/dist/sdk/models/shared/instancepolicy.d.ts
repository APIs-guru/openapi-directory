import { SpeakeasyBase } from "../../../internal/utils";
import { Accelerator } from "./accelerator";
import { AttachedDisk } from "./attacheddisk";
export declare enum InstancePolicyProvisioningModelEnum {
    ProvisioningModelUnspecified = "PROVISIONING_MODEL_UNSPECIFIED",
    Standard = "STANDARD",
    Spot = "SPOT",
    Preemptible = "PREEMPTIBLE"
}
/**
 * InstancePolicy describes an instance type and resources attached to each VM created by this InstancePolicy.
**/
export declare class InstancePolicy extends SpeakeasyBase {
    accelerators?: Accelerator[];
    disks?: AttachedDisk[];
    machineType?: string;
    minCpuPlatform?: string;
    provisioningModel?: InstancePolicyProvisioningModelEnum;
}
