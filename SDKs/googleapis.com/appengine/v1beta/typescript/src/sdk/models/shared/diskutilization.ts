import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DiskUtilization
/** 
 * Target scaling by disk usage. Only applicable in the App Engine flexible environment.
**/
export class DiskUtilization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetReadBytesPerSecond" })
  targetReadBytesPerSecond?: number;

  @SpeakeasyMetadata({ data: "json, name=targetReadOpsPerSecond" })
  targetReadOpsPerSecond?: number;

  @SpeakeasyMetadata({ data: "json, name=targetWriteBytesPerSecond" })
  targetWriteBytesPerSecond?: number;

  @SpeakeasyMetadata({ data: "json, name=targetWriteOpsPerSecond" })
  targetWriteOpsPerSecond?: number;
}
