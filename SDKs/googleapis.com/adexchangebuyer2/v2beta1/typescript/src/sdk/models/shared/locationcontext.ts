import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LocationContext
/** 
 * Output only. The Geo criteria the restriction applies to.
**/
export class LocationContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=geoCriteriaIds" })
  geoCriteriaIds?: number[];
}
