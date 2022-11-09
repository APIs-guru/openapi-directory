import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The constraints that the administrator has put on the parameter.
**/
export declare class ParameterConstraints extends SpeakeasyBase {
    allowedPattern?: string;
    allowedValues?: string[];
    constraintDescription?: string;
    maxLength?: string;
    maxValue?: string;
    minLength?: string;
    minValue?: string;
}
