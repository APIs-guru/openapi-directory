import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceHealthStateEnum } from "./instancehealthstateenum";
import { InstanceHealthReasonEnum } from "./instancehealthreasonenum";



// InstanceHealthSummary
/** 
 * Describes information about the health of the instance.
**/
export class InstanceHealthSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceHealth" })
  instanceHealth?: InstanceHealthStateEnum;

  @SpeakeasyMetadata({ data: "json, name=instanceHealthReason" })
  instanceHealthReason?: InstanceHealthReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName?: string;
}
