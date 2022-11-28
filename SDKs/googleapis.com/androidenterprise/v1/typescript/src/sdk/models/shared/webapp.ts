import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebAppIcon } from "./webappicon";


export enum WebAppDisplayModeEnum {
    DisplayModeUnspecified = "displayModeUnspecified",
    MinimalUi = "minimalUi",
    Standalone = "standalone",
    FullScreen = "fullScreen"
}


// WebApp
/** 
 * A WebApps resource represents a web app created for an enterprise. Web apps are published to managed Google Play and can be distributed like other Android apps. On a user's device, a web app opens its specified URL.
**/
export class WebApp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayMode" })
  displayMode?: WebAppDisplayModeEnum;

  @SpeakeasyMetadata({ data: "json, name=icons", elemType: WebAppIcon })
  icons?: WebAppIcon[];

  @SpeakeasyMetadata({ data: "json, name=isPublished" })
  isPublished?: boolean;

  @SpeakeasyMetadata({ data: "json, name=startUrl" })
  startUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=versionCode" })
  versionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=webAppId" })
  webAppId?: string;
}
