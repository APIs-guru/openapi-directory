import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StateMachineTypeEnum } from "./statemachinetypeenum";


// StateMachineListItem
/** 
 * Contains details about the state machine.
**/
export class StateMachineListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=stateMachineArn" })
  stateMachineArn: string;

  @Metadata({ data: "json, name=type" })
  type: StateMachineTypeEnum;
}
