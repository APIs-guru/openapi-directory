import { SpeakeasyBase } from "../../../internal/utils";
import { DailyVolume } from "./dailyvolume";
import { OverallVolume } from "./overallvolume";
/**
 * An object that includes statistics that are related to the domain that you specified.
**/
export declare class GetDomainStatisticsReportResponse extends SpeakeasyBase {
    dailyVolumes: DailyVolume[];
    overallVolume: OverallVolume;
}
