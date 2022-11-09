import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApkBinary
/** 
 * Represents the binary payload of an APK.
**/
export class ApkBinary extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha1" })
  sha1?: string;

  @Metadata({ data: "json, name=sha256" })
  sha256?: string;
}
