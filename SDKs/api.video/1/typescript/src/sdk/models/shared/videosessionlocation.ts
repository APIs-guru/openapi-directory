import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoSessionLocation
/** 
 * The location of the viewer.
**/
export class VideoSessionLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;
}
