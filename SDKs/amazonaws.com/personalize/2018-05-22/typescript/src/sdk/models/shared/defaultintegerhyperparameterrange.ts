import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DefaultIntegerHyperParameterRange
/** 
 * Provides the name and default range of a integer-valued hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
**/
export class DefaultIntegerHyperParameterRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=isTunable" })
  isTunable?: boolean;

  @Metadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @Metadata({ data: "json, name=minValue" })
  minValue?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
