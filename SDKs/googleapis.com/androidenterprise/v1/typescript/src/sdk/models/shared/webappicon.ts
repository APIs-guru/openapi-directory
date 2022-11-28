import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebAppIcon
/** 
 * Icon for a web app.
**/
export class WebAppIcon extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageData" })
  imageData?: string;
}
