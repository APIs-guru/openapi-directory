import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputConfig } from "./inputconfig";



// Image
/** 
 * A representation of an image. Only images up to 30MB in size are supported.
**/
export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageBytes" })
  imageBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: InputConfig;

  @SpeakeasyMetadata({ data: "json, name=thumbnailUri" })
  thumbnailUri?: string;
}
