import { SpeakeasyBase } from "../../../internal/utils";
import { OverrideButtonConfiguration } from "./overridebuttonconfiguration";
import { DefaultButtonConfiguration } from "./defaultbuttonconfiguration";
/**
 * Button Config for an in-app message.
**/
export declare class InAppMessageButton extends SpeakeasyBase {
    android?: OverrideButtonConfiguration;
    defaultConfig?: DefaultButtonConfiguration;
    ios?: OverrideButtonConfiguration;
    web?: OverrideButtonConfiguration;
}
