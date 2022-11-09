import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ParameterRange } from "./parameterrange";
import { ParameterTypeEnum } from "./parametertypeenum";


// HyperParameterSpecification
/** 
 * Defines a hyperparameter to be used by an algorithm.
**/
export class HyperParameterSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultValue" })
  defaultValue?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=IsRequired" })
  isRequired?: boolean;

  @Metadata({ data: "json, name=IsTunable" })
  isTunable?: boolean;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Range" })
  range?: ParameterRange;

  @Metadata({ data: "json, name=Type" })
  type: ParameterTypeEnum;
}
