import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TrustedAdvisorCheckSummary } from "./trustedadvisorchecksummary";


// DescribeTrustedAdvisorCheckSummariesResponse
/** 
 * The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation.
**/
export class DescribeTrustedAdvisorCheckSummariesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=summaries", elemType: shared.TrustedAdvisorCheckSummary })
  summaries: TrustedAdvisorCheckSummary[];
}
