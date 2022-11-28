import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrustedAdvisorCheckResult } from "./trustedadvisorcheckresult";



// DescribeTrustedAdvisorCheckResultResponse
/** 
 * The result of the Trusted Advisor check returned by the <a>DescribeTrustedAdvisorCheckResult</a> operation.
**/
export class DescribeTrustedAdvisorCheckResultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: TrustedAdvisorCheckResult;
}
