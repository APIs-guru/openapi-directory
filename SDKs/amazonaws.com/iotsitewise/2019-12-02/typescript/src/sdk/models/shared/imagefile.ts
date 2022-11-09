import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageFileTypeEnum } from "./imagefiletypeenum";


// ImageFile
/** 
 * Contains an image file.
**/
export class ImageFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: string;

  @Metadata({ data: "json, name=type" })
  type: ImageFileTypeEnum;
}
