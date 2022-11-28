import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebAppIcon
/** 
 * An icon for a web app. Supported formats are: png, jpg and webp.
**/
export class WebAppIcon extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageData" })
  imageData?: string;
}
