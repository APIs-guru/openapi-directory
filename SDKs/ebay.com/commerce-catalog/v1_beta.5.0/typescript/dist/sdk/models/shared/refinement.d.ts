import { SpeakeasyBase } from "../../../internal/utils";
import { AspectDistribution } from "./aspectdistribution";
/**
 * This type identifies a product category and the aspects associated with that category. Each aspect distribution container returns the distribution of values that have been used for the aspect.
**/
export declare class Refinement extends SpeakeasyBase {
    aspectDistributions?: AspectDistribution[];
    dominantCategoryId?: string;
}
