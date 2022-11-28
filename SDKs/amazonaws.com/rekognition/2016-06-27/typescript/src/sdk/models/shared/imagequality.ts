import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageQuality
/** 
 * Identifies face image brightness and sharpness. 
**/
export class ImageQuality extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Brightness" })
  brightness?: number;

  @SpeakeasyMetadata({ data: "json, name=Sharpness" })
  sharpness?: number;
}
