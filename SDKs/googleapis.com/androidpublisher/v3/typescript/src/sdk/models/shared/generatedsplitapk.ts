import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GeneratedSplitApk
/** 
 * Download metadata for a split APK.
**/
export class GeneratedSplitApk extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloadId" })
  downloadId?: string;

  @Metadata({ data: "json, name=moduleName" })
  moduleName?: string;

  @Metadata({ data: "json, name=splitId" })
  splitId?: string;

  @Metadata({ data: "json, name=variantId" })
  variantId?: number;
}
