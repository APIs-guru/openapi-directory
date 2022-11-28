import { SpeakeasyBase } from "../../../internal/utils";
import { ApkBinary } from "./apkbinary";
/**
 * Information about an APK. The resource for ApksService.
**/
export declare class Apk extends SpeakeasyBase {
    binary?: ApkBinary;
    versionCode?: number;
}
