import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrustedAdvisorResourcesSummary
/** 
 * Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.
**/
export class TrustedAdvisorResourcesSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourcesFlagged" })
  resourcesFlagged: number;

  @Metadata({ data: "json, name=resourcesIgnored" })
  resourcesIgnored: number;

  @Metadata({ data: "json, name=resourcesProcessed" })
  resourcesProcessed: number;

  @Metadata({ data: "json, name=resourcesSuppressed" })
  resourcesSuppressed: number;
}
