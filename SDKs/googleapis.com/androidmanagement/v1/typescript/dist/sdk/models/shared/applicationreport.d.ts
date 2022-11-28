import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationEvent } from "./applicationevent";
import { KeyedAppState } from "./keyedappstate";
export declare enum ApplicationReportApplicationSourceEnum {
    ApplicationSourceUnspecified = "APPLICATION_SOURCE_UNSPECIFIED",
    SystemAppFactoryVersion = "SYSTEM_APP_FACTORY_VERSION",
    SystemAppUpdatedVersion = "SYSTEM_APP_UPDATED_VERSION",
    InstalledFromPlayStore = "INSTALLED_FROM_PLAY_STORE"
}
export declare enum ApplicationReportStateEnum {
    ApplicationStateUnspecified = "APPLICATION_STATE_UNSPECIFIED",
    Removed = "REMOVED",
    Installed = "INSTALLED"
}
/**
 * Information reported about an installed app.
**/
export declare class ApplicationReport extends SpeakeasyBase {
    applicationSource?: ApplicationReportApplicationSourceEnum;
    displayName?: string;
    events?: ApplicationEvent[];
    installerPackageName?: string;
    keyedAppStates?: KeyedAppState[];
    packageName?: string;
    packageSha256Hash?: string;
    signingKeyCertFingerprints?: string[];
    state?: ApplicationReportStateEnum;
    versionCode?: number;
    versionName?: string;
}
