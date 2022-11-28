import { SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketWebsiteConfigurationRedirectTo } from "./awss3bucketwebsiteconfigurationredirectto";
import { AwsS3BucketWebsiteConfigurationRoutingRule } from "./awss3bucketwebsiteconfigurationroutingrule";
/**
 * Website parameters for the S3 bucket.
**/
export declare class AwsS3BucketWebsiteConfiguration extends SpeakeasyBase {
    errorDocument?: string;
    indexDocumentSuffix?: string;
    redirectAllRequestsTo?: AwsS3BucketWebsiteConfigurationRedirectTo;
    routingRules?: AwsS3BucketWebsiteConfigurationRoutingRule[];
}
