import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WebAppIcon
/** 
 * An icon for a web app. Supported formats are: png, jpg and webp.
**/
export class WebAppIcon extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageData" })
  imageData?: string;
}
