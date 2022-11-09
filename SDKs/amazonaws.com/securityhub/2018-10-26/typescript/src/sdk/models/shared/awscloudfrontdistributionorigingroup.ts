import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsCloudFrontDistributionOriginGroupFailover } from "./awscloudfrontdistributionorigingroupfailover";


// AwsCloudFrontDistributionOriginGroup
/** 
 * Information about an origin group for the distribution.
**/
export class AwsCloudFrontDistributionOriginGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailoverCriteria" })
  failoverCriteria?: AwsCloudFrontDistributionOriginGroupFailover;
}
