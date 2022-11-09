import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DailyVolume } from "./dailyvolume";
import { OverallVolume } from "./overallvolume";


// GetDomainStatisticsReportResponse
/** 
 * An object that includes statistics that are related to the domain that you specified.
**/
export class GetDomainStatisticsReportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DailyVolumes", elemType: shared.DailyVolume })
  dailyVolumes: DailyVolume[];

  @Metadata({ data: "json, name=OverallVolume" })
  overallVolume: OverallVolume;
}
