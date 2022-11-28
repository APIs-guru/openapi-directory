import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterRange } from "./parameterrange";
import { ParameterTypeEnum } from "./parametertypeenum";
/**
 * Defines a hyperparameter to be used by an algorithm.
**/
export declare class HyperParameterSpecification extends SpeakeasyBase {
    defaultValue?: string;
    description?: string;
    isRequired?: boolean;
    isTunable?: boolean;
    name: string;
    range?: ParameterRange;
    type: ParameterTypeEnum;
}
