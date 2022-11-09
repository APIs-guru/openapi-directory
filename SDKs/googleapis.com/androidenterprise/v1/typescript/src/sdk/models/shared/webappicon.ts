import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WebAppIcon
/** 
 * Icon for a web app.
**/
export class WebAppIcon extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageData" })
  imageData?: string;
}
