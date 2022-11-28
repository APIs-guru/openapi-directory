import { SpeakeasyBase } from "../../../internal/utils";
import { StateMachineListItem } from "./statemachinelistitem";
export declare class ListStateMachinesOutput extends SpeakeasyBase {
    nextToken?: string;
    stateMachines: StateMachineListItem[];
}
