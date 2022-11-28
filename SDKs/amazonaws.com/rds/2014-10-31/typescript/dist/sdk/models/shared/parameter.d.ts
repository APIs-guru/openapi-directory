import { SpeakeasyBase } from "../../../internal/utils";
import { ApplyMethodEnum } from "./applymethodenum";
/**
 * <p> This data type is used as a request parameter in the <code>ModifyDBParameterGroup</code> and <code>ResetDBParameterGroup</code> actions. </p> <p>This data type is used as a response element in the <code>DescribeEngineDefaultParameters</code> and <code>DescribeDBParameters</code> actions.</p>
**/
export declare class Parameter extends SpeakeasyBase {
    allowedValues?: string;
    applyMethod?: ApplyMethodEnum;
    applyType?: string;
    dataType?: string;
    description?: string;
    isModifiable?: boolean;
    minimumEngineVersion?: string;
    parameterName?: string;
    parameterValue?: string;
    source?: string;
    supportedEngineModes?: string[];
}
