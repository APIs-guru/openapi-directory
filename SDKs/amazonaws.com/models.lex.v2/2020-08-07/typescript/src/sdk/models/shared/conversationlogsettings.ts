import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AudioLogSetting } from "./audiologsetting";
import { TextLogSetting } from "./textlogsetting";


// ConversationLogSettings
/** 
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
**/
export class ConversationLogSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioLogSettings", elemType: shared.AudioLogSetting })
  audioLogSettings?: AudioLogSetting[];

  @Metadata({ data: "json, name=textLogSettings", elemType: shared.TextLogSetting })
  textLogSettings?: TextLogSetting[];
}
