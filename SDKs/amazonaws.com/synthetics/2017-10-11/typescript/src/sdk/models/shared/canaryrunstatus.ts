import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CanaryRunStateEnum } from "./canaryrunstateenum";
import { CanaryRunStateReasonCodeEnum } from "./canaryrunstatereasoncodeenum";



// CanaryRunStatus
/** 
 * This structure contains the status information about a canary run.
**/
export class CanaryRunStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: CanaryRunStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateReason" })
  stateReason?: string;

  @SpeakeasyMetadata({ data: "json, name=StateReasonCode" })
  stateReasonCode?: CanaryRunStateReasonCodeEnum;
}
