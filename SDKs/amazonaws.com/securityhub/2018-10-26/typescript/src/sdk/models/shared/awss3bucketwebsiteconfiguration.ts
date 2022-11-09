import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsS3BucketWebsiteConfigurationRedirectTo } from "./awss3bucketwebsiteconfigurationredirectto";
import { AwsS3BucketWebsiteConfigurationRoutingRule } from "./awss3bucketwebsiteconfigurationroutingrule";


// AwsS3BucketWebsiteConfiguration
/** 
 * Website parameters for the S3 bucket.
**/
export class AwsS3BucketWebsiteConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorDocument" })
  errorDocument?: string;

  @Metadata({ data: "json, name=IndexDocumentSuffix" })
  indexDocumentSuffix?: string;

  @Metadata({ data: "json, name=RedirectAllRequestsTo" })
  redirectAllRequestsTo?: AwsS3BucketWebsiteConfigurationRedirectTo;

  @Metadata({ data: "json, name=RoutingRules", elemType: shared.AwsS3BucketWebsiteConfigurationRoutingRule })
  routingRules?: AwsS3BucketWebsiteConfigurationRoutingRule[];
}
