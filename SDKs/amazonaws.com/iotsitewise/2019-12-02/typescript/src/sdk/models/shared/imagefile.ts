import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageFileTypeEnum } from "./imagefiletypeenum";



// ImageFile
/** 
 * Contains an image file.
**/
export class ImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ImageFileTypeEnum;
}
