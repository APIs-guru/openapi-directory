import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DailyVolume } from "./dailyvolume";
import { OverallVolume } from "./overallvolume";



// GetDomainStatisticsReportResponse
/** 
 * An object that includes statistics that are related to the domain that you specified.
**/
export class GetDomainStatisticsReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DailyVolumes", elemType: DailyVolume })
  dailyVolumes: DailyVolume[];

  @SpeakeasyMetadata({ data: "json, name=OverallVolume" })
  overallVolume: OverallVolume;
}
