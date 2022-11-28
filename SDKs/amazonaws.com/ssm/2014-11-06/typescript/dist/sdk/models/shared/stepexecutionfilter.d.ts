import { SpeakeasyBase } from "../../../internal/utils";
import { StepExecutionFilterKeyEnum } from "./stepexecutionfilterkeyenum";
/**
 * A filter to limit the amount of step execution information returned by the call.
**/
export declare class StepExecutionFilter extends SpeakeasyBase {
    key: StepExecutionFilterKeyEnum;
    values: string[];
}
