import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CanaryStateEnum } from "./canarystateenum";
import { CanaryStateReasonCodeEnum } from "./canarystatereasoncodeenum";



// CanaryStatus
/** 
 * A structure that contains the current state of the canary.
**/
export class CanaryStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: CanaryStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateReason" })
  stateReason?: string;

  @SpeakeasyMetadata({ data: "json, name=StateReasonCode" })
  stateReasonCode?: CanaryStateReasonCodeEnum;
}
