import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InternalAppSharingArtifact
/** 
 * An artifact resource which gets created when uploading an APK or Android App Bundle through internal app sharing.
**/
export class InternalAppSharingArtifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateFingerprint" })
  certificateFingerprint?: string;

  @Metadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;

  @Metadata({ data: "json, name=sha256" })
  sha256?: string;
}
