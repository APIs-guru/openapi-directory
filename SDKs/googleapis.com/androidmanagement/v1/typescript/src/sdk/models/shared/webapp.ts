import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebAppIcon } from "./webappicon";

export enum WebAppDisplayModeEnum {
    DisplayModeUnspecified = "DISPLAY_MODE_UNSPECIFIED"
,    MinimalUi = "MINIMAL_UI"
,    Standalone = "STANDALONE"
,    FullScreen = "FULL_SCREEN"
}


// WebApp
/** 
 * A web app.
**/
export class WebApp extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayMode" })
  displayMode?: WebAppDisplayModeEnum;

  @Metadata({ data: "json, name=icons", elemType: shared.WebAppIcon })
  icons?: WebAppIcon[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=startUrl" })
  startUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=versionCode" })
  versionCode?: string;
}
