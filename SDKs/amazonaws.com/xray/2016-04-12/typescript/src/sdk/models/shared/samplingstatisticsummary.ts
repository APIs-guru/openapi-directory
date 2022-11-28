import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SamplingStatisticSummary
/** 
 * Aggregated request sampling data for a sampling rule across all services for a 10-second window.
**/
export class SamplingStatisticSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BorrowCount" })
  borrowCount?: number;

  @SpeakeasyMetadata({ data: "json, name=RequestCount" })
  requestCount?: number;

  @SpeakeasyMetadata({ data: "json, name=RuleName" })
  ruleName?: string;

  @SpeakeasyMetadata({ data: "json, name=SampledCount" })
  sampledCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: Date;
}
