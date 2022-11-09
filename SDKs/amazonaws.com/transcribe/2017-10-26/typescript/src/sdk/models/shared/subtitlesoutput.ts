import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubtitleFormatEnum } from "./subtitleformatenum";


// SubtitlesOutput
/** 
 * Specify the output format for your subtitle file.
**/
export class SubtitlesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Formats" })
  formats?: SubtitleFormatEnum[];

  @Metadata({ data: "json, name=SubtitleFileUris" })
  subtitleFileUris?: string[];
}
