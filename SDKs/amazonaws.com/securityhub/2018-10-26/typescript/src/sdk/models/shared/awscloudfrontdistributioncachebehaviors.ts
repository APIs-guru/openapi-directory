import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsCloudFrontDistributionCacheBehavior } from "./awscloudfrontdistributioncachebehavior";



// AwsCloudFrontDistributionCacheBehaviors
/** 
 * Provides information about caching for the distribution.
**/
export class AwsCloudFrontDistributionCacheBehaviors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: AwsCloudFrontDistributionCacheBehavior })
  items?: AwsCloudFrontDistributionCacheBehavior[];
}
