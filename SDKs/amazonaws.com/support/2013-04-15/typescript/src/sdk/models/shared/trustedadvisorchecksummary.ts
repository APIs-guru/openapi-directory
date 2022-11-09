import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TrustedAdvisorCategorySpecificSummary } from "./trustedadvisorcategoryspecificsummary";
import { TrustedAdvisorResourcesSummary } from "./trustedadvisorresourcessummary";


// TrustedAdvisorCheckSummary
/** 
 * A summary of a Trusted Advisor check result, including the alert status, last refresh, and number of resources examined.
**/
export class TrustedAdvisorCheckSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=categorySpecificSummary" })
  categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;

  @Metadata({ data: "json, name=checkId" })
  checkId: string;

  @Metadata({ data: "json, name=hasFlaggedResources" })
  hasFlaggedResources?: boolean;

  @Metadata({ data: "json, name=resourcesSummary" })
  resourcesSummary: TrustedAdvisorResourcesSummary;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: string;
}
