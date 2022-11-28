import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrustedAdvisorCostOptimizingSummary
/** 
 * The estimated cost savings that might be realized if the recommended operations are taken.
**/
export class TrustedAdvisorCostOptimizingSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=estimatedMonthlySavings" })
  estimatedMonthlySavings: number;

  @SpeakeasyMetadata({ data: "json, name=estimatedPercentMonthlySavings" })
  estimatedPercentMonthlySavings: number;
}
