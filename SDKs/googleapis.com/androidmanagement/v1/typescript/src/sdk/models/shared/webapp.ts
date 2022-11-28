import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebAppIcon } from "./webappicon";


export enum WebAppDisplayModeEnum {
    DisplayModeUnspecified = "DISPLAY_MODE_UNSPECIFIED",
    MinimalUi = "MINIMAL_UI",
    Standalone = "STANDALONE",
    FullScreen = "FULL_SCREEN"
}


// WebApp
/** 
 * A web app.
**/
export class WebApp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayMode" })
  displayMode?: WebAppDisplayModeEnum;

  @SpeakeasyMetadata({ data: "json, name=icons", elemType: WebAppIcon })
  icons?: WebAppIcon[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=startUrl" })
  startUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=versionCode" })
  versionCode?: string;
}
