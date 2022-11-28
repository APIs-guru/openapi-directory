import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApkBinary
/** 
 * Represents the binary payload of an APK.
**/
export class ApkBinary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  sha1?: string;

  @SpeakeasyMetadata()
  sha256?: string;
}
