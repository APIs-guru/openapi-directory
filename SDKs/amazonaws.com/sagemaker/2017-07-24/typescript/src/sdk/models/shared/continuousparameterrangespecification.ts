import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContinuousParameterRangeSpecification
/** 
 * Defines the possible values for a continuous hyperparameter.
**/
export class ContinuousParameterRangeSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxValue" })
  maxValue: string;

  @Metadata({ data: "json, name=MinValue" })
  minValue: string;
}
