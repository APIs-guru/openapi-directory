import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttackVolumeStatistics
/** 
 * Statistics objects for the various data types in <a>AttackVolume</a>. 
**/
export class AttackVolumeStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Max" })
  max: number;
}
