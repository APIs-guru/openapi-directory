import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CategoricalParameterRange } from "./categoricalparameterrange";
import { ContinuousParameterRange } from "./continuousparameterrange";
import { IntegerParameterRange } from "./integerparameterrange";


// ParameterRanges
/** 
 * <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs with hyperparameter values within these ranges to find the combination of values that result in the training job with the best performance as measured by the objective metric of the hyperparameter tuning job.</p> <note> <p>You can specify a maximum of 20 hyperparameters that a hyperparameter tuning job can search over. Every possible value of a categorical parameter range counts against this limit.</p> </note>
**/
export class ParameterRanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=CategoricalParameterRanges", elemType: shared.CategoricalParameterRange })
  categoricalParameterRanges?: CategoricalParameterRange[];

  @Metadata({ data: "json, name=ContinuousParameterRanges", elemType: shared.ContinuousParameterRange })
  continuousParameterRanges?: ContinuousParameterRange[];

  @Metadata({ data: "json, name=IntegerParameterRanges", elemType: shared.IntegerParameterRange })
  integerParameterRanges?: IntegerParameterRange[];
}
