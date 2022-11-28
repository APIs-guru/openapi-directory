import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InternalAppSharingArtifact
/** 
 * An artifact resource which gets created when uploading an APK or Android App Bundle through internal app sharing.
**/
export class InternalAppSharingArtifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateFingerprint" })
  certificateFingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sha256" })
  sha256?: string;
}
