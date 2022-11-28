import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsCloudFrontDistributionOriginGroupFailover } from "./awscloudfrontdistributionorigingroupfailover";



// AwsCloudFrontDistributionOriginGroup
/** 
 * Information about an origin group for the distribution.
**/
export class AwsCloudFrontDistributionOriginGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailoverCriteria" })
  failoverCriteria?: AwsCloudFrontDistributionOriginGroupFailover;
}
