import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SamplingStatisticSummary
/** 
 * Aggregated request sampling data for a sampling rule across all services for a 10-second window.
**/
export class SamplingStatisticSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=BorrowCount" })
  borrowCount?: number;

  @Metadata({ data: "json, name=RequestCount" })
  requestCount?: number;

  @Metadata({ data: "json, name=RuleName" })
  ruleName?: string;

  @Metadata({ data: "json, name=SampledCount" })
  sampledCount?: number;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: Date;
}
