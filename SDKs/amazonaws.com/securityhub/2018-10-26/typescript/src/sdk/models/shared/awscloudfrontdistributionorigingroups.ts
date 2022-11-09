import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsCloudFrontDistributionOriginGroup } from "./awscloudfrontdistributionorigingroup";


// AwsCloudFrontDistributionOriginGroups
/** 
 * Provides information about origin groups that are associated with the distribution.
**/
export class AwsCloudFrontDistributionOriginGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.AwsCloudFrontDistributionOriginGroup })
  items?: AwsCloudFrontDistributionOriginGroup[];
}
