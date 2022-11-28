import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GeneratedStandaloneApk
/** 
 * Download metadata for a standalone APK.
**/
export class GeneratedStandaloneApk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloadId" })
  downloadId?: string;

  @SpeakeasyMetadata({ data: "json, name=variantId" })
  variantId?: number;
}
