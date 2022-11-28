import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CategoricalHyperParameterRange
/** 
 * Provides the name and range of a categorical hyperparameter.
**/
export class CategoricalHyperParameterRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
