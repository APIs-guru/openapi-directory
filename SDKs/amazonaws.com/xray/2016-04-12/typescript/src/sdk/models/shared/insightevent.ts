import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RequestImpactStatistics } from "./requestimpactstatistics";
import { AnomalousService } from "./anomalousservice";



// InsightEvent
/** 
 * X-Ray reevaluates insights periodically until they are resolved, and records each intermediate state in an event. You can review incident events in the Impact Timeline on the Inspect page in the X-Ray console.
**/
export class InsightEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestImpactStatistics" })
  clientRequestImpactStatistics?: RequestImpactStatistics;

  @SpeakeasyMetadata({ data: "json, name=EventTime" })
  eventTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=RootCauseServiceRequestImpactStatistics" })
  rootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;

  @SpeakeasyMetadata({ data: "json, name=Summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=TopAnomalousServices", elemType: AnomalousService })
  topAnomalousServices?: AnomalousService[];
}
