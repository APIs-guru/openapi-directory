import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StateMachineListItem } from "./statemachinelistitem";



export class ListStateMachinesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=stateMachines", elemType: StateMachineListItem })
  stateMachines: StateMachineListItem[];
}
