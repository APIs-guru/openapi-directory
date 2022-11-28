import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorStatistics } from "./errorstatistics";
import { FaultStatistics } from "./faultstatistics";



// ServiceStatistics
/** 
 * Response statistics for a service.
**/
export class ServiceStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorStatistics" })
  errorStatistics?: ErrorStatistics;

  @SpeakeasyMetadata({ data: "json, name=FaultStatistics" })
  faultStatistics?: FaultStatistics;

  @SpeakeasyMetadata({ data: "json, name=OkCount" })
  okCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalCount" })
  totalCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalResponseTime" })
  totalResponseTime?: number;
}
