import { SpeakeasyBase } from "../../../internal/utils";
import { AudioLogDestination } from "./audiologdestination";
/**
 * Settings for logging audio of conversations between Amazon Lex and a user. You specify whether to log audio and the Amazon S3 bucket where the audio file is stored.
**/
export declare class AudioLogSetting extends SpeakeasyBase {
    destination: AudioLogDestination;
    enabled: boolean;
}
