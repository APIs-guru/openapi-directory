import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CanaryStateEnum } from "./canarystateenum";
import { CanaryStateReasonCodeEnum } from "./canarystatereasoncodeenum";


// CanaryStatus
/** 
 * A structure that contains the current state of the canary.
**/
export class CanaryStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=State" })
  state?: CanaryStateEnum;

  @Metadata({ data: "json, name=StateReason" })
  stateReason?: string;

  @Metadata({ data: "json, name=StateReasonCode" })
  stateReasonCode?: CanaryStateReasonCodeEnum;
}
