import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttackVolume } from "./attackvolume";



// AttackStatisticsDataItem
/** 
 * A single attack statistics data record. This is returned by <a>DescribeAttackStatistics</a> along with a time range indicating the time period that the attack statistics apply to. 
**/
export class AttackStatisticsDataItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttackCount" })
  attackCount: number;

  @SpeakeasyMetadata({ data: "json, name=AttackVolume" })
  attackVolume?: AttackVolume;
}
