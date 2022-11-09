import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImageQuality
/** 
 * Identifies face image brightness and sharpness. 
**/
export class ImageQuality extends SpeakeasyBase {
  @Metadata({ data: "json, name=Brightness" })
  brightness?: number;

  @Metadata({ data: "json, name=Sharpness" })
  sharpness?: number;
}
