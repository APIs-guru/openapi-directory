import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GeneratedAssetPackSlice
/** 
 * Download metadata for an asset pack slice.
**/
export class GeneratedAssetPackSlice extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloadId" })
  downloadId?: string;

  @Metadata({ data: "json, name=moduleName" })
  moduleName?: string;

  @Metadata({ data: "json, name=sliceId" })
  sliceId?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
