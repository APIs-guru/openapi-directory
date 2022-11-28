import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrustedAdvisorResourceDetail
/** 
 * Contains information about a resource identified by a Trusted Advisor check.
**/
export class TrustedAdvisorResourceDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isSuppressed" })
  isSuppressed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: string[];

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;
}
