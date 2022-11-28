import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsightCategoryEnum } from "./insightcategoryenum";
import { RequestImpactStatistics } from "./requestimpactstatistics";
import { ServiceId } from "./serviceid";
import { InsightStateEnum } from "./insightstateenum";
import { AnomalousService } from "./anomalousservice";



// InsightSummary
/** 
 * Information that describes an insight.
**/
export class InsightSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Categories" })
  categories?: InsightCategoryEnum[];

  @SpeakeasyMetadata({ data: "json, name=ClientRequestImpactStatistics" })
  clientRequestImpactStatistics?: RequestImpactStatistics;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=GroupARN" })
  groupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "json, name=InsightId" })
  insightId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=RootCauseServiceId" })
  rootCauseServiceId?: ServiceId;

  @SpeakeasyMetadata({ data: "json, name=RootCauseServiceRequestImpactStatistics" })
  rootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: InsightStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=TopAnomalousServices", elemType: AnomalousService })
  topAnomalousServices?: AnomalousService[];
}
