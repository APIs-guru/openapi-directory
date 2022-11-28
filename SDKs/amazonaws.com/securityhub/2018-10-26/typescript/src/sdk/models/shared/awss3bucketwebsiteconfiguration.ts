import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketWebsiteConfigurationRedirectTo } from "./awss3bucketwebsiteconfigurationredirectto";
import { AwsS3BucketWebsiteConfigurationRoutingRule } from "./awss3bucketwebsiteconfigurationroutingrule";



// AwsS3BucketWebsiteConfiguration
/** 
 * Website parameters for the S3 bucket.
**/
export class AwsS3BucketWebsiteConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorDocument" })
  errorDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=IndexDocumentSuffix" })
  indexDocumentSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=RedirectAllRequestsTo" })
  redirectAllRequestsTo?: AwsS3BucketWebsiteConfigurationRedirectTo;

  @SpeakeasyMetadata({ data: "json, name=RoutingRules", elemType: AwsS3BucketWebsiteConfigurationRoutingRule })
  routingRules?: AwsS3BucketWebsiteConfigurationRoutingRule[];
}
