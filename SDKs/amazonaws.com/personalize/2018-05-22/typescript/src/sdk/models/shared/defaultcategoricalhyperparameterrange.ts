import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DefaultCategoricalHyperParameterRange
/** 
 * Provides the name and default range of a categorical hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
**/
export class DefaultCategoricalHyperParameterRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=isTunable" })
  isTunable?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
