import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsCloudFrontDistributionCacheBehavior } from "./awscloudfrontdistributioncachebehavior";


// AwsCloudFrontDistributionCacheBehaviors
/** 
 * Provides information about caching for the distribution.
**/
export class AwsCloudFrontDistributionCacheBehaviors extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.AwsCloudFrontDistributionCacheBehavior })
  items?: AwsCloudFrontDistributionCacheBehavior[];
}
