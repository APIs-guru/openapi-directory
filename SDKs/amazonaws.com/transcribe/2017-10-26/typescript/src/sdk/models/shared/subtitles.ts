import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubtitleFormatEnum } from "./subtitleformatenum";


// Subtitles
/** 
 * Generate subtitles for your batch transcription job.
**/
export class Subtitles extends SpeakeasyBase {
  @Metadata({ data: "json, name=Formats" })
  formats?: SubtitleFormatEnum[];
}
