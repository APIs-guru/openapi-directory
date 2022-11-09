import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RequestImpactStatistics
/** 
 * Statistics that describe how the incident has impacted a service.
**/
export class RequestImpactStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=FaultCount" })
  faultCount?: number;

  @Metadata({ data: "json, name=OkCount" })
  okCount?: number;

  @Metadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
