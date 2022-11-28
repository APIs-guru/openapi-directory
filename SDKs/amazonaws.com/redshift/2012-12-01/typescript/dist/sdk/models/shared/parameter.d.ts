import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterApplyTypeEnum } from "./parameterapplytypeenum";
/**
 * Describes a parameter in a cluster parameter group.
**/
export declare class Parameter extends SpeakeasyBase {
    allowedValues?: string;
    applyType?: ParameterApplyTypeEnum;
    dataType?: string;
    description?: string;
    isModifiable?: boolean;
    minimumEngineVersion?: string;
    parameterName?: string;
    parameterValue?: string;
    source?: string;
}
