import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CategoricalParameterRangeSpecification
/** 
 * Defines the possible values for a categorical hyperparameter.
**/
export class CategoricalParameterRangeSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
