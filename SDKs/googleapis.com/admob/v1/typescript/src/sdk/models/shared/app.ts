import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppLinkedAppInfo } from "./applinkedappinfo";
import { AppManualAppInfo } from "./appmanualappinfo";



// App
/** 
 * Describes an AdMob app for a specific platform (For example: Android or iOS).
**/
export class App extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedAppInfo" })
  linkedAppInfo?: AppLinkedAppInfo;

  @SpeakeasyMetadata({ data: "json, name=manualAppInfo" })
  manualAppInfo?: AppManualAppInfo;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: string;
}
