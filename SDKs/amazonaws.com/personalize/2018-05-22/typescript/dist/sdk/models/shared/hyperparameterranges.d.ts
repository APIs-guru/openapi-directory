import { SpeakeasyBase } from "../../../internal/utils";
import { CategoricalHyperParameterRange } from "./categoricalhyperparameterrange";
import { ContinuousHyperParameterRange } from "./continuoushyperparameterrange";
import { IntegerHyperParameterRange } from "./integerhyperparameterrange";
/**
 * Specifies the hyperparameters and their ranges. Hyperparameters can be categorical, continuous, or integer-valued.
**/
export declare class HyperParameterRanges extends SpeakeasyBase {
    categoricalHyperParameterRanges?: CategoricalHyperParameterRange[];
    continuousHyperParameterRanges?: ContinuousHyperParameterRange[];
    integerHyperParameterRanges?: IntegerHyperParameterRange[];
}
