import { SpeakeasyBase } from "../../../internal/utils";
import { CategoricalParameterRangeSpecification } from "./categoricalparameterrangespecification";
import { ContinuousParameterRangeSpecification } from "./continuousparameterrangespecification";
import { IntegerParameterRangeSpecification } from "./integerparameterrangespecification";
/**
 * Defines the possible values for categorical, continuous, and integer hyperparameters to be used by an algorithm.
**/
export declare class ParameterRange extends SpeakeasyBase {
    categoricalParameterRangeSpecification?: CategoricalParameterRangeSpecification;
    continuousParameterRangeSpecification?: ContinuousParameterRangeSpecification;
    integerParameterRangeSpecification?: IntegerParameterRangeSpecification;
}
