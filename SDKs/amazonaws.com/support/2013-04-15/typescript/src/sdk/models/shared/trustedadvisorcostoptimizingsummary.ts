import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrustedAdvisorCostOptimizingSummary
/** 
 * The estimated cost savings that might be realized if the recommended operations are taken.
**/
export class TrustedAdvisorCostOptimizingSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=estimatedMonthlySavings" })
  estimatedMonthlySavings: number;

  @Metadata({ data: "json, name=estimatedPercentMonthlySavings" })
  estimatedPercentMonthlySavings: number;
}
