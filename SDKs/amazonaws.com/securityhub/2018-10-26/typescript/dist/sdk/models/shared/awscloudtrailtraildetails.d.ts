import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides details about a CloudTrail trail.
**/
export declare class AwsCloudTrailTrailDetails extends SpeakeasyBase {
    cloudWatchLogsLogGroupArn?: string;
    cloudWatchLogsRoleArn?: string;
    hasCustomEventSelectors?: boolean;
    homeRegion?: string;
    includeGlobalServiceEvents?: boolean;
    isMultiRegionTrail?: boolean;
    isOrganizationTrail?: boolean;
    kmsKeyId?: string;
    logFileValidationEnabled?: boolean;
    name?: string;
    s3BucketName?: string;
    s3KeyPrefix?: string;
    snsTopicArn?: string;
    snsTopicName?: string;
    trailArn?: string;
}
