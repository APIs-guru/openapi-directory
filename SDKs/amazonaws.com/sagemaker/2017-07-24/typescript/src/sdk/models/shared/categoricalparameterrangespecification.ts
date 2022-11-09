import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CategoricalParameterRangeSpecification
/** 
 * Defines the possible values for a categorical hyperparameter.
**/
export class CategoricalParameterRangeSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=Values" })
  values: string[];
}
