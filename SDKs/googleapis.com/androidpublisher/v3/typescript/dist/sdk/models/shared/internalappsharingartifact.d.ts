import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An artifact resource which gets created when uploading an APK or Android App Bundle through internal app sharing.
**/
export declare class InternalAppSharingArtifact extends SpeakeasyBase {
    certificateFingerprint?: string;
    downloadUrl?: string;
    sha256?: string;
}
