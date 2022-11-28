import { SpeakeasyBase } from "../../../internal/utils";
import { DialogActionTypeEnum } from "./dialogactiontypeenum";
/**
 * The next action that Amazon Lex V2 should take.
**/
export declare class DialogAction extends SpeakeasyBase {
    slotToElicit?: string;
    type: DialogActionTypeEnum;
}
