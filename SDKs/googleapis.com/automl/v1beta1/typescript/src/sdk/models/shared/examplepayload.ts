import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Document } from "./document";
import { Image } from "./image";
import { Row } from "./row";
import { TextSnippet } from "./textsnippet";


// ExamplePayload
/** 
 * Example data used for training or prediction.
**/
export class ExamplePayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=document" })
  document?: Document;

  @Metadata({ data: "json, name=image" })
  image?: Image;

  @Metadata({ data: "json, name=row" })
  row?: Row;

  @Metadata({ data: "json, name=textSnippet" })
  textSnippet?: TextSnippet;
}
