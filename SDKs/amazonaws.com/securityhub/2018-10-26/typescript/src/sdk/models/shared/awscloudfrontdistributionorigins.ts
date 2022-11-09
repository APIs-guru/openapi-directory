import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsCloudFrontDistributionOriginItem } from "./awscloudfrontdistributionoriginitem";


// AwsCloudFrontDistributionOrigins
/** 
 * A complex type that contains information about origins and origin groups for this distribution.
**/
export class AwsCloudFrontDistributionOrigins extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.AwsCloudFrontDistributionOriginItem })
  items?: AwsCloudFrontDistributionOriginItem[];
}
