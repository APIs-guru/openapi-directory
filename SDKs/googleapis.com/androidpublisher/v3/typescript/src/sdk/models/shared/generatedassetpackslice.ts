import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GeneratedAssetPackSlice
/** 
 * Download metadata for an asset pack slice.
**/
export class GeneratedAssetPackSlice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloadId" })
  downloadId?: string;

  @SpeakeasyMetadata({ data: "json, name=moduleName" })
  moduleName?: string;

  @SpeakeasyMetadata({ data: "json, name=sliceId" })
  sliceId?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
