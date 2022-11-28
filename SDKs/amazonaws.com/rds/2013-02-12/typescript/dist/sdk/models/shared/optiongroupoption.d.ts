import { SpeakeasyBase } from "../../../internal/utils";
import { OptionGroupOptionSetting } from "./optiongroupoptionsetting";
export declare class OptionGroupOption extends SpeakeasyBase {
    defaultPort?: number;
    description?: string;
    engineName?: string;
    majorEngineVersion?: string;
    minimumRequiredMinorEngineVersion?: string;
    name?: string;
    optionGroupOptionSettings?: OptionGroupOptionSetting[];
    optionsDependedOn?: string[];
    persistent?: boolean;
    portRequired?: boolean;
}
