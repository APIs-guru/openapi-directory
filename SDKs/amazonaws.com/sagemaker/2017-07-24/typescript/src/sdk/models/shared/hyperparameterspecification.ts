import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterRange } from "./parameterrange";
import { ParameterTypeEnum } from "./parametertypeenum";



// HyperParameterSpecification
/** 
 * Defines a hyperparameter to be used by an algorithm.
**/
export class HyperParameterSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultValue" })
  defaultValue?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=IsRequired" })
  isRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsTunable" })
  isTunable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Range" })
  range?: ParameterRange;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: ParameterTypeEnum;
}
