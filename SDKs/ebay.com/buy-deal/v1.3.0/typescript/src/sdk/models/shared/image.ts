import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Image
/** 
 * The type that defines the details of an image, such as size and URL.
**/
export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: string;

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: string;
}
