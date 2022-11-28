import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectiveSensitivityEnum } from "./objectivesensitivityenum";
/**
 * Describes the additional objective for the solution, such as maximizing streaming minutes or increasing revenue. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/optimizing-solution-for-objective.html">Optimizing a solution</a>.
**/
export declare class OptimizationObjective extends SpeakeasyBase {
    itemAttribute?: string;
    objectiveSensitivity?: ObjectiveSensitivityEnum;
}
