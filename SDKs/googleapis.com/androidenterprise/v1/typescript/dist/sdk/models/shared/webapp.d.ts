import { SpeakeasyBase } from "../../../internal/utils";
import { WebAppIcon } from "./webappicon";
export declare enum WebAppDisplayModeEnum {
    DisplayModeUnspecified = "displayModeUnspecified",
    MinimalUi = "minimalUi",
    Standalone = "standalone",
    FullScreen = "fullScreen"
}
/**
 * A WebApps resource represents a web app created for an enterprise. Web apps are published to managed Google Play and can be distributed like other Android apps. On a user's device, a web app opens its specified URL.
**/
export declare class WebApp extends SpeakeasyBase {
    displayMode?: WebAppDisplayModeEnum;
    icons?: WebAppIcon[];
    isPublished?: boolean;
    startUrl?: string;
    title?: string;
    versionCode?: string;
    webAppId?: string;
}
