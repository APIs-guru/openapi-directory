import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationEvent } from "./applicationevent";
import { KeyedAppState } from "./keyedappstate";


export enum ApplicationReportApplicationSourceEnum {
    ApplicationSourceUnspecified = "APPLICATION_SOURCE_UNSPECIFIED",
    SystemAppFactoryVersion = "SYSTEM_APP_FACTORY_VERSION",
    SystemAppUpdatedVersion = "SYSTEM_APP_UPDATED_VERSION",
    InstalledFromPlayStore = "INSTALLED_FROM_PLAY_STORE"
}

export enum ApplicationReportStateEnum {
    ApplicationStateUnspecified = "APPLICATION_STATE_UNSPECIFIED",
    Removed = "REMOVED",
    Installed = "INSTALLED"
}


// ApplicationReport
/** 
 * Information reported about an installed app.
**/
export class ApplicationReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationSource" })
  applicationSource?: ApplicationReportApplicationSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=events", elemType: ApplicationEvent })
  events?: ApplicationEvent[];

  @SpeakeasyMetadata({ data: "json, name=installerPackageName" })
  installerPackageName?: string;

  @SpeakeasyMetadata({ data: "json, name=keyedAppStates", elemType: KeyedAppState })
  keyedAppStates?: KeyedAppState[];

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=packageSha256Hash" })
  packageSha256Hash?: string;

  @SpeakeasyMetadata({ data: "json, name=signingKeyCertFingerprints" })
  signingKeyCertFingerprints?: string[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ApplicationReportStateEnum;

  @SpeakeasyMetadata({ data: "json, name=versionCode" })
  versionCode?: number;

  @SpeakeasyMetadata({ data: "json, name=versionName" })
  versionName?: string;
}
