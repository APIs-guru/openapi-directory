import { SpeakeasyBase } from "../../../internal/utils";
import { DefaultCategoricalHyperParameterRange } from "./defaultcategoricalhyperparameterrange";
import { DefaultContinuousHyperParameterRange } from "./defaultcontinuoushyperparameterrange";
import { DefaultIntegerHyperParameterRange } from "./defaultintegerhyperparameterrange";
/**
 * Specifies the hyperparameters and their default ranges. Hyperparameters can be categorical, continuous, or integer-valued.
**/
export declare class DefaultHyperParameterRanges extends SpeakeasyBase {
    categoricalHyperParameterRanges?: DefaultCategoricalHyperParameterRange[];
    continuousHyperParameterRanges?: DefaultContinuousHyperParameterRange[];
    integerHyperParameterRanges?: DefaultIntegerHyperParameterRange[];
}
