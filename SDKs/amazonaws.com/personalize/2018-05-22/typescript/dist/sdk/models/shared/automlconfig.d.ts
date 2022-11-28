import { SpeakeasyBase } from "../../../internal/utils";
/**
 * When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric. Amazon Personalize then uses that recipe for the solution.
**/
export declare class AutoMlConfig extends SpeakeasyBase {
    metricName?: string;
    recipeList?: string[];
}
