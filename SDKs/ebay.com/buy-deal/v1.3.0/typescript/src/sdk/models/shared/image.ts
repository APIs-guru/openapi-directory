import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Image
/** 
 * The type that defines the details of an image, such as size and URL.
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: string;

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=width" })
  width?: string;
}
