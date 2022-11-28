import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoricalHyperParameterRange } from "./categoricalhyperparameterrange";
import { ContinuousHyperParameterRange } from "./continuoushyperparameterrange";
import { IntegerHyperParameterRange } from "./integerhyperparameterrange";



// HyperParameterRanges
/** 
 * Specifies the hyperparameters and their ranges. Hyperparameters can be categorical, continuous, or integer-valued.
**/
export class HyperParameterRanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoricalHyperParameterRanges", elemType: CategoricalHyperParameterRange })
  categoricalHyperParameterRanges?: CategoricalHyperParameterRange[];

  @SpeakeasyMetadata({ data: "json, name=continuousHyperParameterRanges", elemType: ContinuousHyperParameterRange })
  continuousHyperParameterRanges?: ContinuousHyperParameterRange[];

  @SpeakeasyMetadata({ data: "json, name=integerHyperParameterRanges", elemType: IntegerHyperParameterRange })
  integerHyperParameterRanges?: IntegerHyperParameterRange[];
}
