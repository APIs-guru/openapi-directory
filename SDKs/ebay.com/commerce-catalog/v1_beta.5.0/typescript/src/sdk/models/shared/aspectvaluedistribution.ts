import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AspectValueDistribution
/** 
 * This type contains information about one value of a specified aspect. This value serves as a product refinement.
**/
export class AspectValueDistribution extends SpeakeasyBase {
  @Metadata({ data: "json, name=localizedAspectValue" })
  localizedAspectValue?: string;

  @Metadata({ data: "json, name=matchCount" })
  matchCount?: number;

  @Metadata({ data: "json, name=refinementHref" })
  refinementHref?: string;
}
