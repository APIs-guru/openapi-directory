import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AspectRecommendations
/** 
 * This type is used by the aspectsRecommendation container, which is returned if eBay has found a listing with missing or invalid item aspects (ASPECTS_ADOPTION compliance type).
**/
export class AspectRecommendations extends SpeakeasyBase {
  @Metadata({ data: "json, name=localizedAspectName" })
  localizedAspectName?: string;

  @Metadata({ data: "json, name=suggestedValues" })
  suggestedValues?: string[];
}
