import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CategoricalParameterRange
/** 
 * A list of categorical hyperparameters to tune.
**/
export class CategoricalParameterRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
