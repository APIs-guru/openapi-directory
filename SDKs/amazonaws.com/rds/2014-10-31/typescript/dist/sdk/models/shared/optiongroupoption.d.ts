import { SpeakeasyBase } from "../../../internal/utils";
import { OptionGroupOptionSetting } from "./optiongroupoptionsetting";
import { OptionVersion } from "./optionversion";
/**
 * Available option.
**/
export declare class OptionGroupOption extends SpeakeasyBase {
    defaultPort?: number;
    description?: string;
    engineName?: string;
    majorEngineVersion?: string;
    minimumRequiredMinorEngineVersion?: string;
    name?: string;
    optionGroupOptionSettings?: OptionGroupOptionSetting[];
    optionGroupOptionVersions?: OptionVersion[];
    optionsConflictsWith?: string[];
    optionsDependedOn?: string[];
    permanent?: boolean;
    persistent?: boolean;
    portRequired?: boolean;
    requiresAutoMinorEngineVersionUpgrade?: boolean;
    supportsOptionVersionDowngrade?: boolean;
    vpcOnly?: boolean;
}
