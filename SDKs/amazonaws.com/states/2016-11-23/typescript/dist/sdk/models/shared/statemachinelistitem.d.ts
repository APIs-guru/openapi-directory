import { SpeakeasyBase } from "../../../internal/utils";
import { StateMachineTypeEnum } from "./statemachinetypeenum";
/**
 * Contains details about the state machine.
**/
export declare class StateMachineListItem extends SpeakeasyBase {
    creationDate: Date;
    name: string;
    stateMachineArn: string;
    type: StateMachineTypeEnum;
}
