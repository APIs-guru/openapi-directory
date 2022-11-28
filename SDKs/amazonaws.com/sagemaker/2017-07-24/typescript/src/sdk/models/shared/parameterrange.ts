import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoricalParameterRangeSpecification } from "./categoricalparameterrangespecification";
import { ContinuousParameterRangeSpecification } from "./continuousparameterrangespecification";
import { IntegerParameterRangeSpecification } from "./integerparameterrangespecification";



// ParameterRange
/** 
 * Defines the possible values for categorical, continuous, and integer hyperparameters to be used by an algorithm.
**/
export class ParameterRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CategoricalParameterRangeSpecification" })
  categoricalParameterRangeSpecification?: CategoricalParameterRangeSpecification;

  @SpeakeasyMetadata({ data: "json, name=ContinuousParameterRangeSpecification" })
  continuousParameterRangeSpecification?: ContinuousParameterRangeSpecification;

  @SpeakeasyMetadata({ data: "json, name=IntegerParameterRangeSpecification" })
  integerParameterRangeSpecification?: IntegerParameterRangeSpecification;
}
