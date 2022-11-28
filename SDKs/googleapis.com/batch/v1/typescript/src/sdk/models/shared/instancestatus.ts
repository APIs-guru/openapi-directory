import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InstanceStatusProvisioningModelEnum {
    ProvisioningModelUnspecified = "PROVISIONING_MODEL_UNSPECIFIED",
    Standard = "STANDARD",
    Spot = "SPOT",
    Preemptible = "PREEMPTIBLE"
}


// InstanceStatus
/** 
 * VM instance status.
**/
export class InstanceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=provisioningModel" })
  provisioningModel?: InstanceStatusProvisioningModelEnum;

  @SpeakeasyMetadata({ data: "json, name=taskPack" })
  taskPack?: string;
}
