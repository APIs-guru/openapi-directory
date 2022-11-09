import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorStatistics } from "./errorstatistics";
import { FaultStatistics } from "./faultstatistics";


// EdgeStatistics
/** 
 * Response statistics for an edge.
**/
export class EdgeStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorStatistics" })
  errorStatistics?: ErrorStatistics;

  @Metadata({ data: "json, name=FaultStatistics" })
  faultStatistics?: FaultStatistics;

  @Metadata({ data: "json, name=OkCount" })
  okCount?: number;

  @Metadata({ data: "json, name=TotalCount" })
  totalCount?: number;

  @Metadata({ data: "json, name=TotalResponseTime" })
  totalResponseTime?: number;
}
