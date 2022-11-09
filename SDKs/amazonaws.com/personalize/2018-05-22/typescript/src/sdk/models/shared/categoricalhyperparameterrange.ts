import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CategoricalHyperParameterRange
/** 
 * Provides the name and range of a categorical hyperparameter.
**/
export class CategoricalHyperParameterRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
