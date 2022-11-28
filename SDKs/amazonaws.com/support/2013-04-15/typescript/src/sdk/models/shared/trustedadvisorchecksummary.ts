import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrustedAdvisorCategorySpecificSummary } from "./trustedadvisorcategoryspecificsummary";
import { TrustedAdvisorResourcesSummary } from "./trustedadvisorresourcessummary";



// TrustedAdvisorCheckSummary
/** 
 * A summary of a Trusted Advisor check result, including the alert status, last refresh, and number of resources examined.
**/
export class TrustedAdvisorCheckSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categorySpecificSummary" })
  categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;

  @SpeakeasyMetadata({ data: "json, name=checkId" })
  checkId: string;

  @SpeakeasyMetadata({ data: "json, name=hasFlaggedResources" })
  hasFlaggedResources?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resourcesSummary" })
  resourcesSummary: TrustedAdvisorResourcesSummary;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: string;
}
