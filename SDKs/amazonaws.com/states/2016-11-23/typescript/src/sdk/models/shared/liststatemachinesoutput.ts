import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StateMachineListItem } from "./statemachinelistitem";


export class ListStateMachinesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=stateMachines", elemType: shared.StateMachineListItem })
  stateMachines: StateMachineListItem[];
}
