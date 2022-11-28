import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LastRunErrorStatusCodeEnum } from "./lastrunerrorstatuscodeenum";



// LastRunErrorStatus
/** 
 * Specifies whether any account- or bucket-level access errors occurred when a classification job ran. For information about using logging data to investigate these errors, see <a href="https://docs.aws.amazon.com/macie/latest/user/discovery-jobs-monitor-cw-logs.html">Monitoring sensitive data discovery jobs</a> in the <i>Amazon Macie User Guide</i>.
**/
export class LastRunErrorStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: LastRunErrorStatusCodeEnum;
}
