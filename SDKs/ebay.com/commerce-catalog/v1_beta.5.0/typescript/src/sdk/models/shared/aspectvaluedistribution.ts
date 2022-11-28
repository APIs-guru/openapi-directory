import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AspectValueDistribution
/** 
 * This type contains information about one value of a specified aspect. This value serves as a product refinement.
**/
export class AspectValueDistribution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=localizedAspectValue" })
  localizedAspectValue?: string;

  @SpeakeasyMetadata({ data: "json, name=matchCount" })
  matchCount?: number;

  @SpeakeasyMetadata({ data: "json, name=refinementHref" })
  refinementHref?: string;
}
