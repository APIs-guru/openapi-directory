import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionStatusEnum } from "./executionstatusenum";


// ExecutionListItem
/** 
 * Contains details about an execution.
**/
export class ExecutionListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionArn" })
  executionArn: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=startDate" })
  startDate: Date;

  @Metadata({ data: "json, name=stateMachineArn" })
  stateMachineArn: string;

  @Metadata({ data: "json, name=status" })
  status: ExecutionStatusEnum;

  @Metadata({ data: "json, name=stopDate" })
  stopDate?: Date;
}
