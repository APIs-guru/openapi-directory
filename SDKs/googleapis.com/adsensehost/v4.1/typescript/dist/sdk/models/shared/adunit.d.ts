import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AdStyle } from "./adstyle";
/**
 * The backup option to be used in instances where no ad is available.
**/
export declare class AdUnitContentAdsSettingsBackupOption extends SpeakeasyBase {
    color?: string;
    type?: string;
    url?: string;
}
/**
 * Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).
**/
export declare class AdUnitContentAdsSettings extends SpeakeasyBase {
    backupOption?: AdUnitContentAdsSettingsBackupOption;
    size?: string;
    type?: string;
}
/**
 * Settings specific to WAP mobile content ads (AFMC - deprecated).
**/
export declare class AdUnitMobileContentAdsSettings extends SpeakeasyBase {
    markupLanguage?: string;
    scriptingLanguage?: string;
    size?: string;
    type?: string;
}
export declare class AdUnit extends SpeakeasyBase {
    code?: string;
    contentAdsSettings?: AdUnitContentAdsSettings;
    customStyle?: AdStyle;
    id?: string;
    kind?: string;
    mobileContentAdsSettings?: AdUnitMobileContentAdsSettings;
    name?: string;
    status?: string;
}
