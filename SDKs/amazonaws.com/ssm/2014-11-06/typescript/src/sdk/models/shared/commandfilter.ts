import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommandFilterKeyEnum } from "./commandfilterkeyenum";



// CommandFilter
/** 
 * <p>Describes a command filter.</p> <note> <p>An instance ID can't be specified when a command status is <code>Pending</code> because the command hasn't run on the instance yet.</p> </note>
**/
export class CommandFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: CommandFilterKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
