import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContinuousHyperParameterRange
/** 
 * Provides the name and range of a continuous hyperparameter.
**/
export class ContinuousHyperParameterRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @Metadata({ data: "json, name=minValue" })
  minValue?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
