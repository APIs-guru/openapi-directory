import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApkBinary } from "./apkbinary";



export class Apk extends SpeakeasyBase {
  @SpeakeasyMetadata()
  binary?: ApkBinary;

  @SpeakeasyMetadata()
  versionCode?: number;
}
