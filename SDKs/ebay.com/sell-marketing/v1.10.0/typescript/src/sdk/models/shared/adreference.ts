import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdReference
/** 
 * This type defines the fields for an ad ID and its associated URL.
**/
export class AdReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adId" })
  adId?: string;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}
