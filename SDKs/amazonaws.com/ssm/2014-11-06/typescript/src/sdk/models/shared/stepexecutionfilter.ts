import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StepExecutionFilterKeyEnum } from "./stepexecutionfilterkeyenum";



// StepExecutionFilter
/** 
 * A filter to limit the amount of step execution information returned by the call.
**/
export class StepExecutionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: StepExecutionFilterKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
