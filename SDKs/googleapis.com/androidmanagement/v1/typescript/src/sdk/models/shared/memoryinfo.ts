import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MemoryInfo
/** 
 * Information about device memory and storage.
**/
export class MemoryInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=totalInternalStorage" })
  totalInternalStorage?: string;

  @SpeakeasyMetadata({ data: "json, name=totalRam" })
  totalRam?: string;
}
