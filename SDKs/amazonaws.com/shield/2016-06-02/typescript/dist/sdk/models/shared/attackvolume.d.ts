import { SpeakeasyBase } from "../../../internal/utils";
import { AttackVolumeStatistics } from "./attackvolumestatistics";
/**
 * Information about the volume of attacks during the time period, included in an <a>AttackStatisticsDataItem</a>. If the accompanying <code>AttackCount</code> in the statistics object is zero, this setting might be empty.
**/
export declare class AttackVolume extends SpeakeasyBase {
    bitsPerSecond?: AttackVolumeStatistics;
    packetsPerSecond?: AttackVolumeStatistics;
    requestsPerSecond?: AttackVolumeStatistics;
}
