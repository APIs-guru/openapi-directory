import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CommandFilterKeyEnum } from "./commandfilterkeyenum";


// CommandFilter
/** 
 * <p>Describes a command filter.</p> <note> <p>An instance ID can't be specified when a command status is <code>Pending</code> because the command hasn't run on the instance yet.</p> </note>
**/
export class CommandFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: CommandFilterKeyEnum;

  @Metadata({ data: "json, name=value" })
  value: string;
}
