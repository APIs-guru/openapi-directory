import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutoMlConfig
/** 
 * When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric. Amazon Personalize then uses that recipe for the solution.
**/
export class AutoMlConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricName" })
  metricName?: string;

  @Metadata({ data: "json, name=recipeList" })
  recipeList?: string[];
}
