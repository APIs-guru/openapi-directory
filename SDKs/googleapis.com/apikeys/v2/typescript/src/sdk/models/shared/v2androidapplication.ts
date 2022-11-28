import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// V2AndroidApplication
/** 
 * Identifier of an Android application for key use.
**/
export class V2AndroidApplication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=sha1Fingerprint" })
  sha1Fingerprint?: string;
}
