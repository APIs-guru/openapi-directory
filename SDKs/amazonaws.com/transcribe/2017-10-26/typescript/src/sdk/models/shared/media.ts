import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Media
/** 
 * Describes the input media file in a transcription request.
**/
export class Media extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MediaFileUri" })
  mediaFileUri?: string;

  @SpeakeasyMetadata({ data: "json, name=RedactedMediaFileUri" })
  redactedMediaFileUri?: string;
}
