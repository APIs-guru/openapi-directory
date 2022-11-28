import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrustedAdvisorResourcesSummary
/** 
 * Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.
**/
export class TrustedAdvisorResourcesSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourcesFlagged" })
  resourcesFlagged: number;

  @SpeakeasyMetadata({ data: "json, name=resourcesIgnored" })
  resourcesIgnored: number;

  @SpeakeasyMetadata({ data: "json, name=resourcesProcessed" })
  resourcesProcessed: number;

  @SpeakeasyMetadata({ data: "json, name=resourcesSuppressed" })
  resourcesSuppressed: number;
}
