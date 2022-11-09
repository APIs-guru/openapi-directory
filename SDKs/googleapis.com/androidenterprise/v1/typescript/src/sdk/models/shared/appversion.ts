import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AppVersionTrackEnum {
    AppTrackUnspecified = "appTrackUnspecified"
,    Production = "production"
,    Beta = "beta"
,    Alpha = "alpha"
}


// AppVersion
/** 
 * This represents a single version of the app.
**/
export class AppVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=isProduction" })
  isProduction?: boolean;

  @Metadata({ data: "json, name=track" })
  track?: AppVersionTrackEnum;

  @Metadata({ data: "json, name=trackId" })
  trackId?: string[];

  @Metadata({ data: "json, name=versionCode" })
  versionCode?: number;

  @Metadata({ data: "json, name=versionString" })
  versionString?: string;
}
