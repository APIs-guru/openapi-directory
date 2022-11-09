import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttackVolume } from "./attackvolume";


// AttackStatisticsDataItem
/** 
 * A single attack statistics data record. This is returned by <a>DescribeAttackStatistics</a> along with a time range indicating the time period that the attack statistics apply to. 
**/
export class AttackStatisticsDataItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttackCount" })
  attackCount: number;

  @Metadata({ data: "json, name=AttackVolume" })
  attackVolume?: AttackVolume;
}
