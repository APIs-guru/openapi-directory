import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudioLogDestination } from "./audiologdestination";



// AudioLogSetting
/** 
 * Settings for logging audio of conversations between Amazon Lex and a user. You specify whether to log audio and the Amazon S3 bucket where the audio file is stored.
**/
export class AudioLogSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination: AudioLogDestination;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;
}
