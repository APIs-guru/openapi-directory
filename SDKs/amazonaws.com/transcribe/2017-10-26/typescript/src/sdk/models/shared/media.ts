import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Media
/** 
 * Describes the input media file in a transcription request.
**/
export class Media extends SpeakeasyBase {
  @Metadata({ data: "json, name=MediaFileUri" })
  mediaFileUri?: string;

  @Metadata({ data: "json, name=RedactedMediaFileUri" })
  redactedMediaFileUri?: string;
}
