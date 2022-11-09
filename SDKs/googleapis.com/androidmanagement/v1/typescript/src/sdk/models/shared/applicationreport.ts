import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationEvent } from "./applicationevent";
import { KeyedAppState } from "./keyedappstate";

export enum ApplicationReportApplicationSourceEnum {
    ApplicationSourceUnspecified = "APPLICATION_SOURCE_UNSPECIFIED"
,    SystemAppFactoryVersion = "SYSTEM_APP_FACTORY_VERSION"
,    SystemAppUpdatedVersion = "SYSTEM_APP_UPDATED_VERSION"
,    InstalledFromPlayStore = "INSTALLED_FROM_PLAY_STORE"
}

export enum ApplicationReportStateEnum {
    ApplicationStateUnspecified = "APPLICATION_STATE_UNSPECIFIED"
,    Removed = "REMOVED"
,    Installed = "INSTALLED"
}


// ApplicationReport
/** 
 * Information reported about an installed app.
**/
export class ApplicationReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationSource" })
  applicationSource?: ApplicationReportApplicationSourceEnum;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=events", elemType: shared.ApplicationEvent })
  events?: ApplicationEvent[];

  @Metadata({ data: "json, name=installerPackageName" })
  installerPackageName?: string;

  @Metadata({ data: "json, name=keyedAppStates", elemType: shared.KeyedAppState })
  keyedAppStates?: KeyedAppState[];

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=packageSha256Hash" })
  packageSha256Hash?: string;

  @Metadata({ data: "json, name=signingKeyCertFingerprints" })
  signingKeyCertFingerprints?: string[];

  @Metadata({ data: "json, name=state" })
  state?: ApplicationReportStateEnum;

  @Metadata({ data: "json, name=versionCode" })
  versionCode?: number;

  @Metadata({ data: "json, name=versionName" })
  versionName?: string;
}
