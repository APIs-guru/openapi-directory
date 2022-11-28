import { SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterRanges } from "./hyperparameterranges";
import { HpoObjective } from "./hpoobjective";
import { HpoResourceConfig } from "./hporesourceconfig";
/**
 * Describes the properties for hyperparameter optimization (HPO).
**/
export declare class HpoConfig extends SpeakeasyBase {
    algorithmHyperParameterRanges?: HyperParameterRanges;
    hpoObjective?: HpoObjective;
    hpoResourceConfig?: HpoResourceConfig;
}
