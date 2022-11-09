import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MessageReactionEntity
/** 
 * List Message Reactions
**/
export class MessageReactionEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=emoji" })
  emoji?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;
}
