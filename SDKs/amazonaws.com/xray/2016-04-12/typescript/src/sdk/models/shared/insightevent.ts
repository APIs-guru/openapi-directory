import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RequestImpactStatistics } from "./requestimpactstatistics";
import { RequestImpactStatistics } from "./requestimpactstatistics";
import { AnomalousService } from "./anomalousservice";


// InsightEvent
/** 
 * X-Ray reevaluates insights periodically until they are resolved, and records each intermediate state in an event. You can review incident events in the Impact Timeline on the Inspect page in the X-Ray console.
**/
export class InsightEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestImpactStatistics" })
  clientRequestImpactStatistics?: RequestImpactStatistics;

  @Metadata({ data: "json, name=EventTime" })
  eventTime?: Date;

  @Metadata({ data: "json, name=RootCauseServiceRequestImpactStatistics" })
  rootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;

  @Metadata({ data: "json, name=Summary" })
  summary?: string;

  @Metadata({ data: "json, name=TopAnomalousServices", elemType: shared.AnomalousService })
  topAnomalousServices?: AnomalousService[];
}
