import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsCloudFrontDistributionOriginS3OriginConfig } from "./awscloudfrontdistributionorigins3originconfig";


// AwsCloudFrontDistributionOriginItem
/** 
 * A complex type that describes the S3 bucket, HTTP server (for example, a web server), AWS Elemental MediaStore, or other server from which CloudFront gets your files.
**/
export class AwsCloudFrontDistributionOriginItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=OriginPath" })
  originPath?: string;

  @Metadata({ data: "json, name=S3OriginConfig" })
  s3OriginConfig?: AwsCloudFrontDistributionOriginS3OriginConfig;
}
