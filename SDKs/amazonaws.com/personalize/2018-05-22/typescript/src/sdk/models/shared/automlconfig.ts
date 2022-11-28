import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutoMlConfig
/** 
 * When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric. Amazon Personalize then uses that recipe for the solution.
**/
export class AutoMlConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=recipeList" })
  recipeList?: string[];
}
