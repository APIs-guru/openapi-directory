import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data about a queue.
**/
export declare class AwsSqsQueueDetails extends SpeakeasyBase {
    deadLetterTargetArn?: string;
    kmsDataKeyReusePeriodSeconds?: number;
    kmsMasterKeyId?: string;
    queueName?: string;
}
