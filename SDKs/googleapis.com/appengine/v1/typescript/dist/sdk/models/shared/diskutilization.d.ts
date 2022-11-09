import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Target scaling by disk usage. Only applicable in the App Engine flexible environment.
**/
export declare class DiskUtilization extends SpeakeasyBase {
    targetReadBytesPerSecond?: number;
    targetReadOpsPerSecond?: number;
    targetWriteBytesPerSecond?: number;
    targetWriteOpsPerSecond?: number;
}
