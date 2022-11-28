import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LiveStreamSessionLocation
/** 
 * The location of the viewer of the live stream.
**/
export class LiveStreamSessionLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;
}
