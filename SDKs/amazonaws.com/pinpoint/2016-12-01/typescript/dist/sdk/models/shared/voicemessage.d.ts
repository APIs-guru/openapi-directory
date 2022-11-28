import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the settings for a one-time voice message that's sent directly to an endpoint through the voice channel.
**/
export declare class VoiceMessage extends SpeakeasyBase {
    body?: string;
    languageCode?: string;
    originationNumber?: string;
    substitutions?: Map<string, string[]>;
    voiceId?: string;
}
