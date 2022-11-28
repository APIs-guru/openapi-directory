import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SamplingStatisticsDocument
/** 
 * Request sampling results for a single rule from a service. Results are for the last 10 seconds unless the service has been assigned a longer reporting interval after a previous call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.
**/
export class SamplingStatisticsDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BorrowCount" })
  borrowCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ClientID" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=RequestCount" })
  requestCount: number;

  @SpeakeasyMetadata({ data: "json, name=RuleName" })
  ruleName: string;

  @SpeakeasyMetadata({ data: "json, name=SampledCount" })
  sampledCount: number;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp: Date;
}
