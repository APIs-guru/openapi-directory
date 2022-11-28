import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoSessionLocation
/** 
 * The location of the viewer.
**/
export class VideoSessionLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;
}
