import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdReference
/** 
 * This type defines the fields for an ad ID and its associated URL.
**/
export class AdReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=adId" })
  adId?: string;

  @Metadata({ data: "json, name=href" })
  href?: string;
}
