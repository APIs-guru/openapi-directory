import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsCloudFrontDistributionDefaultCacheBehavior
/** 
 * Contains information about the default cache configuration for the distribution.
**/
export class AwsCloudFrontDistributionDefaultCacheBehavior extends SpeakeasyBase {
  @Metadata({ data: "json, name=ViewerProtocolPolicy" })
  viewerProtocolPolicy?: string;
}
