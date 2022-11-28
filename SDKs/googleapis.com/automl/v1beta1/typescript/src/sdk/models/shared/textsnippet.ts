import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextSnippet
/** 
 * A representation of a text snippet.
**/
export class TextSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=contentUri" })
  contentUri?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
