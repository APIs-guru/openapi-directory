import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.
**/
export declare class EventStream extends SpeakeasyBase {
    applicationId: string;
    destinationStreamArn: string;
    externalId?: string;
    lastModifiedDate?: string;
    lastUpdatedBy?: string;
    roleArn: string;
}
