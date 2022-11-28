import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContinuousHyperParameterRange
/** 
 * Provides the name and range of a continuous hyperparameter.
**/
export class ContinuousHyperParameterRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
