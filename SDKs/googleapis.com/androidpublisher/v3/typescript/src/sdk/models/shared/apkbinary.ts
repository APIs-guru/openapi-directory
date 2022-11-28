import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApkBinary
/** 
 * Represents the binary payload of an APK.
**/
export class ApkBinary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha1" })
  sha1?: string;

  @SpeakeasyMetadata({ data: "json, name=sha256" })
  sha256?: string;
}
