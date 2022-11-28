import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Option settings are the actual settings being applied or configured for that option. It is used when you modify an option group or describe option groups. For example, the NATIVE_NETWORK_ENCRYPTION option has a setting called SQLNET.ENCRYPTION_SERVER that can have several different values.
**/
export declare class OptionSetting extends SpeakeasyBase {
    allowedValues?: string;
    applyType?: string;
    dataType?: string;
    defaultValue?: string;
    description?: string;
    isCollection?: boolean;
    isModifiable?: boolean;
    name?: string;
    value?: string;
}
