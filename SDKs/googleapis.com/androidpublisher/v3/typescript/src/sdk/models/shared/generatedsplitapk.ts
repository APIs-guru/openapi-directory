import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GeneratedSplitApk
/** 
 * Download metadata for a split APK.
**/
export class GeneratedSplitApk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloadId" })
  downloadId?: string;

  @SpeakeasyMetadata({ data: "json, name=moduleName" })
  moduleName?: string;

  @SpeakeasyMetadata({ data: "json, name=splitId" })
  splitId?: string;

  @SpeakeasyMetadata({ data: "json, name=variantId" })
  variantId?: number;
}
