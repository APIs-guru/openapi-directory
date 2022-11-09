import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An object that defines a message that contains SSML-formatted text.
**/
export declare class SsmlMessageType extends SpeakeasyBase {
    languageCode?: string;
    text?: string;
    voiceId?: string;
}
