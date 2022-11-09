import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrustedAdvisorResourceDetail
/** 
 * Contains information about a resource identified by a Trusted Advisor check.
**/
export class TrustedAdvisorResourceDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=isSuppressed" })
  isSuppressed?: boolean;

  @Metadata({ data: "json, name=metadata" })
  metadata: string[];

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=status" })
  status: string;
}
