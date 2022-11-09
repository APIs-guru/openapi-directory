import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AudioLogDestination } from "./audiologdestination";


// AudioLogSetting
/** 
 * Settings for logging audio of conversations between Amazon Lex and a user. You specify whether to log audio and the Amazon S3 bucket where the audio file is stored.
**/
export class AudioLogSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination: AudioLogDestination;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;
}
