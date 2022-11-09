import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppLinkedAppInfo } from "./applinkedappinfo";
import { AppManualAppInfo } from "./appmanualappinfo";


// App
/** 
 * Describes an AdMob app for a specific platform (For example: Android or iOS).
**/
export class App extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=linkedAppInfo" })
  linkedAppInfo?: AppLinkedAppInfo;

  @Metadata({ data: "json, name=manualAppInfo" })
  manualAppInfo?: AppManualAppInfo;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: string;
}
