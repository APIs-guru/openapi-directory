import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsCloudFrontDistributionOriginItem } from "./awscloudfrontdistributionoriginitem";



// AwsCloudFrontDistributionOrigins
/** 
 * A complex type that contains information about origins and origin groups for this distribution.
**/
export class AwsCloudFrontDistributionOrigins extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: AwsCloudFrontDistributionOriginItem })
  items?: AwsCloudFrontDistributionOriginItem[];
}
