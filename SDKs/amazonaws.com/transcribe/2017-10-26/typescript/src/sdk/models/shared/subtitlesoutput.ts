import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubtitleFormatEnum } from "./subtitleformatenum";



// SubtitlesOutput
/** 
 * Specify the output format for your subtitle file.
**/
export class SubtitlesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Formats" })
  formats?: SubtitleFormatEnum[];

  @SpeakeasyMetadata({ data: "json, name=SubtitleFileUris" })
  subtitleFileUris?: string[];
}
