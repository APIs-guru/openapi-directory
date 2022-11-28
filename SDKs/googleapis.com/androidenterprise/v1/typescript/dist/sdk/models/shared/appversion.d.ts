import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AppVersionTrackEnum {
    AppTrackUnspecified = "appTrackUnspecified",
    Production = "production",
    Beta = "beta",
    Alpha = "alpha"
}
/**
 * This represents a single version of the app.
**/
export declare class AppVersion extends SpeakeasyBase {
    isProduction?: boolean;
    track?: AppVersionTrackEnum;
    trackId?: string[];
    versionCode?: number;
    versionString?: string;
}
