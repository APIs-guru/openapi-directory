import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionErrorTypeEnum } from "./executionerrortypeenum";


// ExecutionError
/** 
 * Specifies the error message and type, for an error that occurs during the execution of the workflow.
**/
export class ExecutionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message: string;

  @Metadata({ data: "json, name=Type" })
  type: ExecutionErrorTypeEnum;
}
