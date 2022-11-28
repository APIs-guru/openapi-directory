import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MessageReactionEntity
/** 
 * List Message Reactions
**/
export class MessageReactionEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emoji" })
  emoji?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
