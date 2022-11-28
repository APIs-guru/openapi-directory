import { SpeakeasyBase } from "../../../internal/utils";
import { AutomationExecutionFilterKeyEnum } from "./automationexecutionfilterkeyenum";
/**
 * A filter used to match specific automation executions. This is used to limit the scope of Automation execution information returned.
**/
export declare class AutomationExecutionFilter extends SpeakeasyBase {
    key: AutomationExecutionFilterKeyEnum;
    values: string[];
}
