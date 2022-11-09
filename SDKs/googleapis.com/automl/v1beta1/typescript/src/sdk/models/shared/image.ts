import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputConfig } from "./inputconfig";


// Image
/** 
 * A representation of an image. Only images up to 30MB in size are supported.
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageBytes" })
  imageBytes?: string;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: InputConfig;

  @Metadata({ data: "json, name=thumbnailUri" })
  thumbnailUri?: string;
}
