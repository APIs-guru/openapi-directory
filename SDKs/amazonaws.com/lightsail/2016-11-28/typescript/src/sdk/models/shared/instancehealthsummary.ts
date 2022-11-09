import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceHealthStateEnum } from "./instancehealthstateenum";
import { InstanceHealthReasonEnum } from "./instancehealthreasonenum";


// InstanceHealthSummary
/** 
 * Describes information about the health of the instance.
**/
export class InstanceHealthSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceHealth" })
  instanceHealth?: InstanceHealthStateEnum;

  @Metadata({ data: "json, name=instanceHealthReason" })
  instanceHealthReason?: InstanceHealthReasonEnum;

  @Metadata({ data: "json, name=instanceName" })
  instanceName?: string;
}
