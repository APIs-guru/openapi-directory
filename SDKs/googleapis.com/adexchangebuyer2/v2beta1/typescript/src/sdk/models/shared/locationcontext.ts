import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LocationContext
/** 
 * Output only. The Geo criteria the restriction applies to.
**/
export class LocationContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=geoCriteriaIds" })
  geoCriteriaIds?: number[];
}
