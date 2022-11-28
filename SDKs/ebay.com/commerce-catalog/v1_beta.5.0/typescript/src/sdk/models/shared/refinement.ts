import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AspectDistribution } from "./aspectdistribution";



// Refinement
/** 
 * This type identifies a product category and the aspects associated with that category. Each aspect distribution container returns the distribution of values that have been used for the aspect.
**/
export class Refinement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aspectDistributions", elemType: AspectDistribution })
  aspectDistributions?: AspectDistribution[];

  @SpeakeasyMetadata({ data: "json, name=dominantCategoryId" })
  dominantCategoryId?: string;
}
