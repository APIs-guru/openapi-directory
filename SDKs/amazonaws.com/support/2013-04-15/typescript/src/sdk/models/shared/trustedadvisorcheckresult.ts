import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrustedAdvisorCategorySpecificSummary } from "./trustedadvisorcategoryspecificsummary";
import { TrustedAdvisorResourceDetail } from "./trustedadvisorresourcedetail";
import { TrustedAdvisorResourcesSummary } from "./trustedadvisorresourcessummary";



// TrustedAdvisorCheckResult
/** 
 * The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>.
**/
export class TrustedAdvisorCheckResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categorySpecificSummary" })
  categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;

  @SpeakeasyMetadata({ data: "json, name=checkId" })
  checkId: string;

  @SpeakeasyMetadata({ data: "json, name=flaggedResources", elemType: TrustedAdvisorResourceDetail })
  flaggedResources: TrustedAdvisorResourceDetail[];

  @SpeakeasyMetadata({ data: "json, name=resourcesSummary" })
  resourcesSummary: TrustedAdvisorResourcesSummary;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: string;
}
