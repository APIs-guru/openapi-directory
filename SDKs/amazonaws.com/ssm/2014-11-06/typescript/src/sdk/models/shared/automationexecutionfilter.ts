import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutomationExecutionFilterKeyEnum } from "./automationexecutionfilterkeyenum";


// AutomationExecutionFilter
/** 
 * A filter used to match specific automation executions. This is used to limit the scope of Automation execution information returned.
**/
export class AutomationExecutionFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: AutomationExecutionFilterKeyEnum;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
