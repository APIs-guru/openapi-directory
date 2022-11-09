import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebAppIcon } from "./webappicon";

export enum WebAppDisplayModeEnum {
    DisplayModeUnspecified = "displayModeUnspecified"
,    MinimalUi = "minimalUi"
,    Standalone = "standalone"
,    FullScreen = "fullScreen"
}


// WebApp
/** 
 * A WebApps resource represents a web app created for an enterprise. Web apps are published to managed Google Play and can be distributed like other Android apps. On a user's device, a web app opens its specified URL.
**/
export class WebApp extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayMode" })
  displayMode?: WebAppDisplayModeEnum;

  @Metadata({ data: "json, name=icons", elemType: shared.WebAppIcon })
  icons?: WebAppIcon[];

  @Metadata({ data: "json, name=isPublished" })
  isPublished?: boolean;

  @Metadata({ data: "json, name=startUrl" })
  startUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=versionCode" })
  versionCode?: string;

  @Metadata({ data: "json, name=webAppId" })
  webAppId?: string;
}
