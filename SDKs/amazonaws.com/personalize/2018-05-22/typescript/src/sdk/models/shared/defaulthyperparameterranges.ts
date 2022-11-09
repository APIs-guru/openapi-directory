import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DefaultCategoricalHyperParameterRange } from "./defaultcategoricalhyperparameterrange";
import { DefaultContinuousHyperParameterRange } from "./defaultcontinuoushyperparameterrange";
import { DefaultIntegerHyperParameterRange } from "./defaultintegerhyperparameterrange";


// DefaultHyperParameterRanges
/** 
 * Specifies the hyperparameters and their default ranges. Hyperparameters can be categorical, continuous, or integer-valued.
**/
export class DefaultHyperParameterRanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoricalHyperParameterRanges", elemType: shared.DefaultCategoricalHyperParameterRange })
  categoricalHyperParameterRanges?: DefaultCategoricalHyperParameterRange[];

  @Metadata({ data: "json, name=continuousHyperParameterRanges", elemType: shared.DefaultContinuousHyperParameterRange })
  continuousHyperParameterRanges?: DefaultContinuousHyperParameterRange[];

  @Metadata({ data: "json, name=integerHyperParameterRanges", elemType: shared.DefaultIntegerHyperParameterRange })
  integerHyperParameterRanges?: DefaultIntegerHyperParameterRange[];
}
