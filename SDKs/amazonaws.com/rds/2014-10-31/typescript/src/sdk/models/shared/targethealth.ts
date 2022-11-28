import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetHealthReasonEnum } from "./targethealthreasonenum";
import { TargetStateEnum } from "./targetstateenum";



// TargetHealth
/** 
 * Information about the connection health of an RDS Proxy target.
**/
export class TargetHealth extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  reason?: TargetHealthReasonEnum;

  @SpeakeasyMetadata()
  state?: TargetStateEnum;
}
