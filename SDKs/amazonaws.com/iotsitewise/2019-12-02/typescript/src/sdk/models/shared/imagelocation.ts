import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageLocation
/** 
 * Contains an image that is uploaded to IoT SiteWise and available at a URL.
**/
export class ImageLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
