import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InsightCategoryEnum } from "./insightcategoryenum";
import { RequestImpactStatistics } from "./requestimpactstatistics";
import { ServiceId } from "./serviceid";
import { RequestImpactStatistics } from "./requestimpactstatistics";
import { InsightStateEnum } from "./insightstateenum";
import { AnomalousService } from "./anomalousservice";


// Insight
/** 
 * When fault rates go outside of the expected range, X-Ray creates an insight. Insights tracks emergent issues within your applications.
**/
export class Insight extends SpeakeasyBase {
  @Metadata({ data: "json, name=Categories" })
  categories?: InsightCategoryEnum[];

  @Metadata({ data: "json, name=ClientRequestImpactStatistics" })
  clientRequestImpactStatistics?: RequestImpactStatistics;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=GroupARN" })
  groupArn?: string;

  @Metadata({ data: "json, name=GroupName" })
  groupName?: string;

  @Metadata({ data: "json, name=InsightId" })
  insightId?: string;

  @Metadata({ data: "json, name=RootCauseServiceId" })
  rootCauseServiceId?: ServiceId;

  @Metadata({ data: "json, name=RootCauseServiceRequestImpactStatistics" })
  rootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=State" })
  state?: InsightStateEnum;

  @Metadata({ data: "json, name=Summary" })
  summary?: string;

  @Metadata({ data: "json, name=TopAnomalousServices", elemType: shared.AnomalousService })
  topAnomalousServices?: AnomalousService[];
}
