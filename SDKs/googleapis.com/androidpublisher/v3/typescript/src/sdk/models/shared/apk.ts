import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApkBinary } from "./apkbinary";


// Apk
/** 
 * Information about an APK. The resource for ApksService.
**/
export class Apk extends SpeakeasyBase {
  @Metadata({ data: "json, name=binary" })
  binary?: ApkBinary;

  @Metadata({ data: "json, name=versionCode" })
  versionCode?: number;
}
