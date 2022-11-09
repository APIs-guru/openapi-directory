import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MemoryInfo
/** 
 * Information about device memory and storage.
**/
export class MemoryInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=totalInternalStorage" })
  totalInternalStorage?: string;

  @Metadata({ data: "json, name=totalRam" })
  totalRam?: string;
}
