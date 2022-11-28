import { SpeakeasyBase } from "../../../internal/utils";
import { SubtitleFormatEnum } from "./subtitleformatenum";
/**
 * Specify the output format for your subtitle file.
**/
export declare class SubtitlesOutput extends SpeakeasyBase {
    formats?: SubtitleFormatEnum[];
    subtitleFileUris?: string[];
}
