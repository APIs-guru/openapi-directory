import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoMlConfig } from "./automlconfig";
import { HpoConfig } from "./hpoconfig";
import { OptimizationObjective } from "./optimizationobjective";
/**
 * Describes the configuration properties for the solution.
**/
export declare class SolutionConfig extends SpeakeasyBase {
    algorithmHyperParameters?: Map<string, string>;
    autoMlConfig?: AutoMlConfig;
    eventValueThreshold?: string;
    featureTransformationParameters?: Map<string, string>;
    hpoConfig?: HpoConfig;
    optimizationObjective?: OptimizationObjective;
}
