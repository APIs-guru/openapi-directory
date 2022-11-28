import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubtitleFormatEnum } from "./subtitleformatenum";



// Subtitles
/** 
 * Generate subtitles for your batch transcription job.
**/
export class Subtitles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Formats" })
  formats?: SubtitleFormatEnum[];
}
