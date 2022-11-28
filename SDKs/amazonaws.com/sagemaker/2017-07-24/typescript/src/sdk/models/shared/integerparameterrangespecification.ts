import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IntegerParameterRangeSpecification
/** 
 * Defines the possible values for an integer hyperparameter.
**/
export class IntegerParameterRangeSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxValue" })
  maxValue: string;

  @SpeakeasyMetadata({ data: "json, name=MinValue" })
  minValue: string;
}
