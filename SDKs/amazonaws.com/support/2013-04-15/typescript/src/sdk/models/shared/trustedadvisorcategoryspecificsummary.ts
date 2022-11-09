import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TrustedAdvisorCostOptimizingSummary } from "./trustedadvisorcostoptimizingsummary";


// TrustedAdvisorCategorySpecificSummary
/** 
 * The container for summary information that relates to the category of the Trusted Advisor check.
**/
export class TrustedAdvisorCategorySpecificSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=costOptimizing" })
  costOptimizing?: TrustedAdvisorCostOptimizingSummary;
}
