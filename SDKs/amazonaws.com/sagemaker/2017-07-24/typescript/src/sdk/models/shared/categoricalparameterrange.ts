import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CategoricalParameterRange
/** 
 * A list of categorical hyperparameters to tune.
**/
export class CategoricalParameterRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
