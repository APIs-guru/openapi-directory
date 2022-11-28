import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InstanceStatusProvisioningModelEnum {
    ProvisioningModelUnspecified = "PROVISIONING_MODEL_UNSPECIFIED",
    Standard = "STANDARD",
    Spot = "SPOT",
    Preemptible = "PREEMPTIBLE"
}
/**
 * VM instance status.
**/
export declare class InstanceStatus extends SpeakeasyBase {
    machineType?: string;
    provisioningModel?: InstanceStatusProvisioningModelEnum;
    taskPack?: string;
}
