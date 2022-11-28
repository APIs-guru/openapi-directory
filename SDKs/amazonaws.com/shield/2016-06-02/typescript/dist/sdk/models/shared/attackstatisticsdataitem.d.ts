import { SpeakeasyBase } from "../../../internal/utils";
import { AttackVolume } from "./attackvolume";
/**
 * A single attack statistics data record. This is returned by <a>DescribeAttackStatistics</a> along with a time range indicating the time period that the attack statistics apply to.
**/
export declare class AttackStatisticsDataItem extends SpeakeasyBase {
    attackCount: number;
    attackVolume?: AttackVolume;
}
