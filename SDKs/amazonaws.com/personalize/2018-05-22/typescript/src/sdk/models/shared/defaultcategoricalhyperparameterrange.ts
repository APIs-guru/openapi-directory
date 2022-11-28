import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DefaultCategoricalHyperParameterRange
/** 
 * Provides the name and default range of a categorical hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
**/
export class DefaultCategoricalHyperParameterRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isTunable" })
  isTunable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
