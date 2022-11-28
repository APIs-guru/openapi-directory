import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RequestImpactStatistics
/** 
 * Statistics that describe how the incident has impacted a service.
**/
export class RequestImpactStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FaultCount" })
  faultCount?: number;

  @SpeakeasyMetadata({ data: "json, name=OkCount" })
  okCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
