import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IntegerParameterRangeSpecification
/** 
 * Defines the possible values for an integer hyperparameter.
**/
export class IntegerParameterRangeSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxValue" })
  maxValue: string;

  @Metadata({ data: "json, name=MinValue" })
  minValue: string;
}
