import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterInlinePolicy } from "./parameterinlinepolicy";
import { ParameterTierEnum } from "./parametertierenum";
import { ParameterTypeEnum } from "./parametertypeenum";
/**
 * Information about parameter usage.
**/
export declare class ParameterHistory extends SpeakeasyBase {
    allowedPattern?: string;
    dataType?: string;
    description?: string;
    keyId?: string;
    labels?: string[];
    lastModifiedDate?: Date;
    lastModifiedUser?: string;
    name?: string;
    policies?: ParameterInlinePolicy[];
    tier?: ParameterTierEnum;
    type?: ParameterTypeEnum;
    value?: string;
    version?: number;
}
