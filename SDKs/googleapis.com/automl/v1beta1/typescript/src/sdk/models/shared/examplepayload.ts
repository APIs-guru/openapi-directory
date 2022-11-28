import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
import { Image } from "./image";
import { Row } from "./row";
import { TextSnippet } from "./textsnippet";



// ExamplePayload
/** 
 * Example data used for training or prediction.
**/
export class ExamplePayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: Document;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Image;

  @SpeakeasyMetadata({ data: "json, name=row" })
  row?: Row;

  @SpeakeasyMetadata({ data: "json, name=textSnippet" })
  textSnippet?: TextSnippet;
}
