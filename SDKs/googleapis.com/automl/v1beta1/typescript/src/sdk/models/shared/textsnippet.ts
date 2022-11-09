import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TextSnippet
/** 
 * A representation of a text snippet.
**/
export class TextSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=contentUri" })
  contentUri?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
