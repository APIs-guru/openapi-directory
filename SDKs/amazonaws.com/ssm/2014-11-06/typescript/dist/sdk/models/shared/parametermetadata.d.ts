import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterInlinePolicy } from "./parameterinlinepolicy";
import { ParameterTierEnum } from "./parametertierenum";
import { ParameterTypeEnum } from "./parametertypeenum";
/**
 * Metadata includes information like the ARN of the last user and the date/time the parameter was last used.
**/
export declare class ParameterMetadata extends SpeakeasyBase {
    allowedPattern?: string;
    dataType?: string;
    description?: string;
    keyId?: string;
    lastModifiedDate?: Date;
    lastModifiedUser?: string;
    name?: string;
    policies?: ParameterInlinePolicy[];
    tier?: ParameterTierEnum;
    type?: ParameterTypeEnum;
    version?: number;
}
