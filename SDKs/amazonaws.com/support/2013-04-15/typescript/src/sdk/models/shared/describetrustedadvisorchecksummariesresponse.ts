import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrustedAdvisorCheckSummary } from "./trustedadvisorchecksummary";



// DescribeTrustedAdvisorCheckSummariesResponse
/** 
 * The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation.
**/
export class DescribeTrustedAdvisorCheckSummariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=summaries", elemType: TrustedAdvisorCheckSummary })
  summaries: TrustedAdvisorCheckSummary[];
}
