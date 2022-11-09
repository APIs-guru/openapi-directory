import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CategoricalParameterRangeSpecification } from "./categoricalparameterrangespecification";
import { ContinuousParameterRangeSpecification } from "./continuousparameterrangespecification";
import { IntegerParameterRangeSpecification } from "./integerparameterrangespecification";


// ParameterRange
/** 
 * Defines the possible values for categorical, continuous, and integer hyperparameters to be used by an algorithm.
**/
export class ParameterRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=CategoricalParameterRangeSpecification" })
  categoricalParameterRangeSpecification?: CategoricalParameterRangeSpecification;

  @Metadata({ data: "json, name=ContinuousParameterRangeSpecification" })
  continuousParameterRangeSpecification?: ContinuousParameterRangeSpecification;

  @Metadata({ data: "json, name=IntegerParameterRangeSpecification" })
  integerParameterRangeSpecification?: IntegerParameterRangeSpecification;
}
