import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AppVersionTrackEnum {
    AppTrackUnspecified = "appTrackUnspecified",
    Production = "production",
    Beta = "beta",
    Alpha = "alpha"
}


// AppVersion
/** 
 * This represents a single version of the app.
**/
export class AppVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isProduction" })
  isProduction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=track" })
  track?: AppVersionTrackEnum;

  @SpeakeasyMetadata({ data: "json, name=trackId" })
  trackId?: string[];

  @SpeakeasyMetadata({ data: "json, name=versionCode" })
  versionCode?: number;

  @SpeakeasyMetadata({ data: "json, name=versionString" })
  versionString?: string;
}
