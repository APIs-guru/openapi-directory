import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsCloudFrontDistributionOriginS3OriginConfig } from "./awscloudfrontdistributionorigins3originconfig";



// AwsCloudFrontDistributionOriginItem
/** 
 * A complex type that describes the S3 bucket, HTTP server (for example, a web server), AWS Elemental MediaStore, or other server from which CloudFront gets your files.
**/
export class AwsCloudFrontDistributionOriginItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=OriginPath" })
  originPath?: string;

  @SpeakeasyMetadata({ data: "json, name=S3OriginConfig" })
  s3OriginConfig?: AwsCloudFrontDistributionOriginS3OriginConfig;
}
