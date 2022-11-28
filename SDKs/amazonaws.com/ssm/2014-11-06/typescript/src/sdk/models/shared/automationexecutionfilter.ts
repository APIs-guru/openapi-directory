import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutomationExecutionFilterKeyEnum } from "./automationexecutionfilterkeyenum";



// AutomationExecutionFilter
/** 
 * A filter used to match specific automation executions. This is used to limit the scope of Automation execution information returned.
**/
export class AutomationExecutionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: AutomationExecutionFilterKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
