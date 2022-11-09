import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DialogActionTypeEnum } from "./dialogactiontypeenum";


// DialogAction
/** 
 * The next action that Amazon Lex V2 should take.
**/
export class DialogAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=slotToElicit" })
  slotToElicit?: string;

  @Metadata({ data: "json, name=type" })
  type: DialogActionTypeEnum;
}
