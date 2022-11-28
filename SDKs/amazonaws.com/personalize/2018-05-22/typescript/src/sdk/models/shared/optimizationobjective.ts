import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectiveSensitivityEnum } from "./objectivesensitivityenum";



// OptimizationObjective
/** 
 * Describes the additional objective for the solution, such as maximizing streaming minutes or increasing revenue. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/optimizing-solution-for-objective.html">Optimizing a solution</a>.
**/
export class OptimizationObjective extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemAttribute" })
  itemAttribute?: string;

  @SpeakeasyMetadata({ data: "json, name=objectiveSensitivity" })
  objectiveSensitivity?: ObjectiveSensitivityEnum;
}
