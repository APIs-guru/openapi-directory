import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContinuousParameterRangeSpecification
/** 
 * Defines the possible values for a continuous hyperparameter.
**/
export class ContinuousParameterRangeSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxValue" })
  maxValue: string;

  @SpeakeasyMetadata({ data: "json, name=MinValue" })
  minValue: string;
}
