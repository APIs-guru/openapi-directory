import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutoMlResult
/** 
 * When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), specifies the recipe that best optimized the specified metric.
**/
export class AutoMlResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=bestRecipeArn" })
  bestRecipeArn?: string;
}
