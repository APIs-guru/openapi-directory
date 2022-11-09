import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// V2AndroidApplication
/** 
 * Identifier of an Android application for key use.
**/
export class V2AndroidApplication extends SpeakeasyBase {
  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=sha1Fingerprint" })
  sha1Fingerprint?: string;
}
