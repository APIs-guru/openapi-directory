import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { ParameterTierEnum } from "./parametertierenum";
import { ParameterTypeEnum } from "./parametertypeenum";
export declare class PutParameterRequest extends SpeakeasyBase {
    allowedPattern?: string;
    dataType?: string;
    description?: string;
    keyId?: string;
    name: string;
    overwrite?: boolean;
    policies?: string;
    tags?: Tag[];
    tier?: ParameterTierEnum;
    type?: ParameterTypeEnum;
    value: string;
}
