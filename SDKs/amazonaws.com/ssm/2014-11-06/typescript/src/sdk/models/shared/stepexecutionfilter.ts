import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StepExecutionFilterKeyEnum } from "./stepexecutionfilterkeyenum";


// StepExecutionFilter
/** 
 * A filter to limit the amount of step execution information returned by the call.
**/
export class StepExecutionFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: StepExecutionFilterKeyEnum;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
