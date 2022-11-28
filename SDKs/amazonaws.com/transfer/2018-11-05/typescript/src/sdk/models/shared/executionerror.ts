import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionErrorTypeEnum } from "./executionerrortypeenum";



// ExecutionError
/** 
 * Specifies the error message and type, for an error that occurs during the execution of the workflow.
**/
export class ExecutionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: ExecutionErrorTypeEnum;
}
