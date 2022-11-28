import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DialogActionTypeEnum } from "./dialogactiontypeenum";



// DialogAction
/** 
 * The next action that Amazon Lex V2 should take.
**/
export class DialogAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=slotToElicit" })
  slotToElicit?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: DialogActionTypeEnum;
}
