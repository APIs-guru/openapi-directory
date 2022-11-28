import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StateMachineTypeEnum } from "./statemachinetypeenum";



// StateMachineListItem
/** 
 * Contains details about the state machine.
**/
export class StateMachineListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=stateMachineArn" })
  stateMachineArn: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: StateMachineTypeEnum;
}
