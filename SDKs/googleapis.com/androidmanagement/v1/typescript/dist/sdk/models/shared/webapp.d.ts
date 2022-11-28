import { SpeakeasyBase } from "../../../internal/utils";
import { WebAppIcon } from "./webappicon";
export declare enum WebAppDisplayModeEnum {
    DisplayModeUnspecified = "DISPLAY_MODE_UNSPECIFIED",
    MinimalUi = "MINIMAL_UI",
    Standalone = "STANDALONE",
    FullScreen = "FULL_SCREEN"
}
/**
 * A web app.
**/
export declare class WebApp extends SpeakeasyBase {
    displayMode?: WebAppDisplayModeEnum;
    icons?: WebAppIcon[];
    name?: string;
    startUrl?: string;
    title?: string;
    versionCode?: string;
}
