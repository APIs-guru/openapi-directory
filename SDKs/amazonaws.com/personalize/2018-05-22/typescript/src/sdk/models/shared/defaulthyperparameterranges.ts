import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefaultCategoricalHyperParameterRange } from "./defaultcategoricalhyperparameterrange";
import { DefaultContinuousHyperParameterRange } from "./defaultcontinuoushyperparameterrange";
import { DefaultIntegerHyperParameterRange } from "./defaultintegerhyperparameterrange";



// DefaultHyperParameterRanges
/** 
 * Specifies the hyperparameters and their default ranges. Hyperparameters can be categorical, continuous, or integer-valued.
**/
export class DefaultHyperParameterRanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoricalHyperParameterRanges", elemType: DefaultCategoricalHyperParameterRange })
  categoricalHyperParameterRanges?: DefaultCategoricalHyperParameterRange[];

  @SpeakeasyMetadata({ data: "json, name=continuousHyperParameterRanges", elemType: DefaultContinuousHyperParameterRange })
  continuousHyperParameterRanges?: DefaultContinuousHyperParameterRange[];

  @SpeakeasyMetadata({ data: "json, name=integerHyperParameterRanges", elemType: DefaultIntegerHyperParameterRange })
  integerHyperParameterRanges?: DefaultIntegerHyperParameterRange[];
}
