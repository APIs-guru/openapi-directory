import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttackVolumeStatistics } from "./attackvolumestatistics";
import { AttackVolumeStatistics } from "./attackvolumestatistics";
import { AttackVolumeStatistics } from "./attackvolumestatistics";


// AttackVolume
/** 
 * Information about the volume of attacks during the time period, included in an <a>AttackStatisticsDataItem</a>. If the accompanying <code>AttackCount</code> in the statistics object is zero, this setting might be empty.
**/
export class AttackVolume extends SpeakeasyBase {
  @Metadata({ data: "json, name=BitsPerSecond" })
  bitsPerSecond?: AttackVolumeStatistics;

  @Metadata({ data: "json, name=PacketsPerSecond" })
  packetsPerSecond?: AttackVolumeStatistics;

  @Metadata({ data: "json, name=RequestsPerSecond" })
  requestsPerSecond?: AttackVolumeStatistics;
}
