import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IntegerHyperParameterRange
/** 
 * Provides the name and range of an integer-valued hyperparameter.
**/
export class IntegerHyperParameterRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @Metadata({ data: "json, name=minValue" })
  minValue?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
