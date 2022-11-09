import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SamplingStatisticsDocument
/** 
 * Request sampling results for a single rule from a service. Results are for the last 10 seconds unless the service has been assigned a longer reporting interval after a previous call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.
**/
export class SamplingStatisticsDocument extends SpeakeasyBase {
  @Metadata({ data: "json, name=BorrowCount" })
  borrowCount?: number;

  @Metadata({ data: "json, name=ClientID" })
  clientId: string;

  @Metadata({ data: "json, name=RequestCount" })
  requestCount: number;

  @Metadata({ data: "json, name=RuleName" })
  ruleName: string;

  @Metadata({ data: "json, name=SampledCount" })
  sampledCount: number;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp: Date;
}
