import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AttackVolumeStatistics
/** 
 * Statistics objects for the various data types in <a>AttackVolume</a>. 
**/
export class AttackVolumeStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=Max" })
  max: number;
}
