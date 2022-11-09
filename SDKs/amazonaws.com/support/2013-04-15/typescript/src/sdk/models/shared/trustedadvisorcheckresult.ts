import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TrustedAdvisorCategorySpecificSummary } from "./trustedadvisorcategoryspecificsummary";
import { TrustedAdvisorResourceDetail } from "./trustedadvisorresourcedetail";
import { TrustedAdvisorResourcesSummary } from "./trustedadvisorresourcessummary";


// TrustedAdvisorCheckResult
/** 
 * The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>.
**/
export class TrustedAdvisorCheckResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=categorySpecificSummary" })
  categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;

  @Metadata({ data: "json, name=checkId" })
  checkId: string;

  @Metadata({ data: "json, name=flaggedResources", elemType: shared.TrustedAdvisorResourceDetail })
  flaggedResources: TrustedAdvisorResourceDetail[];

  @Metadata({ data: "json, name=resourcesSummary" })
  resourcesSummary: TrustedAdvisorResourcesSummary;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: string;
}
