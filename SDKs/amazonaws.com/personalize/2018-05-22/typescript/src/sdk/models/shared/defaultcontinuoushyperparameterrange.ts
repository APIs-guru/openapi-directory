import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DefaultContinuousHyperParameterRange
/** 
 * Provides the name and default range of a continuous hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
**/
export class DefaultContinuousHyperParameterRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isTunable" })
  isTunable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
