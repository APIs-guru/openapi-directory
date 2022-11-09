import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DiskUtilization
/** 
 * Target scaling by disk usage. Only applicable in the App Engine flexible environment.
**/
export class DiskUtilization extends SpeakeasyBase {
  @Metadata({ data: "json, name=targetReadBytesPerSecond" })
  targetReadBytesPerSecond?: number;

  @Metadata({ data: "json, name=targetReadOpsPerSecond" })
  targetReadOpsPerSecond?: number;

  @Metadata({ data: "json, name=targetWriteBytesPerSecond" })
  targetWriteBytesPerSecond?: number;

  @Metadata({ data: "json, name=targetWriteOpsPerSecond" })
  targetWriteOpsPerSecond?: number;
}
