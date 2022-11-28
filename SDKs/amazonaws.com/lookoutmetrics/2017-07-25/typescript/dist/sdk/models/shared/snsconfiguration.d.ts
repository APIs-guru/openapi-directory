import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about the SNS topic to which you want to send your alerts and the IAM role that has access to that topic.
**/
export declare class SnsConfiguration extends SpeakeasyBase {
    roleArn: string;
    snsTopicArn: string;
}
