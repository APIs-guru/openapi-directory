import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApkBinary } from "./apkbinary";



// Apk
/** 
 * Information about an APK. The resource for ApksService.
**/
export class Apk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=binary" })
  binary?: ApkBinary;

  @SpeakeasyMetadata({ data: "json, name=versionCode" })
  versionCode?: number;
}
