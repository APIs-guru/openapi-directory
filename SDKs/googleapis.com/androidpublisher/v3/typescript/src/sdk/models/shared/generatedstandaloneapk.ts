import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GeneratedStandaloneApk
/** 
 * Download metadata for a standalone APK.
**/
export class GeneratedStandaloneApk extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloadId" })
  downloadId?: string;

  @Metadata({ data: "json, name=variantId" })
  variantId?: number;
}
