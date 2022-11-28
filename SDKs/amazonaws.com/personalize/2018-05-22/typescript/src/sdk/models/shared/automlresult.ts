import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutoMlResult
/** 
 * When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), specifies the recipe that best optimized the specified metric.
**/
export class AutoMlResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bestRecipeArn" })
  bestRecipeArn?: string;
}
