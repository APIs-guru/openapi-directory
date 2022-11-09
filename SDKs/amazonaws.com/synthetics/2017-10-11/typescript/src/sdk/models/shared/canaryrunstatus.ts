import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CanaryRunStateEnum } from "./canaryrunstateenum";
import { CanaryRunStateReasonCodeEnum } from "./canaryrunstatereasoncodeenum";


// CanaryRunStatus
/** 
 * This structure contains the status information about a canary run.
**/
export class CanaryRunStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=State" })
  state?: CanaryRunStateEnum;

  @Metadata({ data: "json, name=StateReason" })
  stateReason?: string;

  @Metadata({ data: "json, name=StateReasonCode" })
  stateReasonCode?: CanaryRunStateReasonCodeEnum;
}
