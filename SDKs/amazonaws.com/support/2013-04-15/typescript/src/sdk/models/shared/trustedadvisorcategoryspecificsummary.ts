import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrustedAdvisorCostOptimizingSummary } from "./trustedadvisorcostoptimizingsummary";



// TrustedAdvisorCategorySpecificSummary
/** 
 * The container for summary information that relates to the category of the Trusted Advisor check.
**/
export class TrustedAdvisorCategorySpecificSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=costOptimizing" })
  costOptimizing?: TrustedAdvisorCostOptimizingSummary;
}
