import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionStatusEnum } from "./executionstatusenum";



// ExecutionListItem
/** 
 * Contains details about an execution.
**/
export class ExecutionListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionArn" })
  executionArn: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate: Date;

  @SpeakeasyMetadata({ data: "json, name=stateMachineArn" })
  stateMachineArn: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=stopDate" })
  stopDate?: Date;
}
