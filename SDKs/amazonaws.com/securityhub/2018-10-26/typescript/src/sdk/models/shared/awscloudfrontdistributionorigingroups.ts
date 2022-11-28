import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsCloudFrontDistributionOriginGroup } from "./awscloudfrontdistributionorigingroup";



// AwsCloudFrontDistributionOriginGroups
/** 
 * Provides information about origin groups that are associated with the distribution.
**/
export class AwsCloudFrontDistributionOriginGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: AwsCloudFrontDistributionOriginGroup })
  items?: AwsCloudFrontDistributionOriginGroup[];
}
