import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AspectDistribution } from "./aspectdistribution";


// Refinement
/** 
 * This type identifies a product category and the aspects associated with that category. Each aspect distribution container returns the distribution of values that have been used for the aspect.
**/
export class Refinement extends SpeakeasyBase {
  @Metadata({ data: "json, name=aspectDistributions", elemType: shared.AspectDistribution })
  aspectDistributions?: AspectDistribution[];

  @Metadata({ data: "json, name=dominantCategoryId" })
  dominantCategoryId?: string;
}
