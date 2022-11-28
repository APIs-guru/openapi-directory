import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudioLogSetting } from "./audiologsetting";
import { TextLogSetting } from "./textlogsetting";



// ConversationLogSettings
/** 
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
**/
export class ConversationLogSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioLogSettings", elemType: AudioLogSetting })
  audioLogSettings?: AudioLogSetting[];

  @SpeakeasyMetadata({ data: "json, name=textLogSettings", elemType: TextLogSetting })
  textLogSettings?: TextLogSetting[];
}
