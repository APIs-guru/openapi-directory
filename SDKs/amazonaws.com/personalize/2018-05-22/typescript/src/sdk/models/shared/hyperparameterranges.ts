import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CategoricalHyperParameterRange } from "./categoricalhyperparameterrange";
import { ContinuousHyperParameterRange } from "./continuoushyperparameterrange";
import { IntegerHyperParameterRange } from "./integerhyperparameterrange";


// HyperParameterRanges
/** 
 * Specifies the hyperparameters and their ranges. Hyperparameters can be categorical, continuous, or integer-valued.
**/
export class HyperParameterRanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoricalHyperParameterRanges", elemType: shared.CategoricalHyperParameterRange })
  categoricalHyperParameterRanges?: CategoricalHyperParameterRange[];

  @Metadata({ data: "json, name=continuousHyperParameterRanges", elemType: shared.ContinuousHyperParameterRange })
  continuousHyperParameterRanges?: ContinuousHyperParameterRange[];

  @Metadata({ data: "json, name=integerHyperParameterRanges", elemType: shared.IntegerHyperParameterRange })
  integerHyperParameterRanges?: IntegerHyperParameterRange[];
}
