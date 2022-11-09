import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImageLocation
/** 
 * Contains an image that is uploaded to IoT SiteWise and available at a URL.
**/
export class ImageLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
