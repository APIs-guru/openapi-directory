import { SpeakeasyBase } from "../../../internal/utils";
import { AudioLogSetting } from "./audiologsetting";
import { TextLogSetting } from "./textlogsetting";
/**
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
**/
export declare class ConversationLogSettings extends SpeakeasyBase {
    audioLogSettings?: AudioLogSetting[];
    textLogSettings?: TextLogSetting[];
}
