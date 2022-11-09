import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TrustedAdvisorCheckResult } from "./trustedadvisorcheckresult";


// DescribeTrustedAdvisorCheckResultResponse
/** 
 * The result of the Trusted Advisor check returned by the <a>DescribeTrustedAdvisorCheckResult</a> operation.
**/
export class DescribeTrustedAdvisorCheckResultResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result?: TrustedAdvisorCheckResult;
}
