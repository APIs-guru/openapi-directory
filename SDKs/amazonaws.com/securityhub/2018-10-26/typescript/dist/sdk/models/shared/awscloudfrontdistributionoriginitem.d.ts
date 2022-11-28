import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCloudFrontDistributionOriginS3OriginConfig } from "./awscloudfrontdistributionorigins3originconfig";
/**
 * A complex type that describes the S3 bucket, HTTP server (for example, a web server), AWS Elemental MediaStore, or other server from which CloudFront gets your files.
**/
export declare class AwsCloudFrontDistributionOriginItem extends SpeakeasyBase {
    domainName?: string;
    id?: string;
    originPath?: string;
    s3OriginConfig?: AwsCloudFrontDistributionOriginS3OriginConfig;
}
