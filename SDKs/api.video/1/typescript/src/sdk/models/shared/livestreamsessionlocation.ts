import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LiveStreamSessionLocation
/** 
 * The location of the viewer of the live stream.
**/
export class LiveStreamSessionLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;
}
