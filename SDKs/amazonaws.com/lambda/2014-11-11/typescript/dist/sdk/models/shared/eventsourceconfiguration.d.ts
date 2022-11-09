import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes mapping between an Amazon Kinesis stream and a Lambda function.
**/
export declare class EventSourceConfiguration extends SpeakeasyBase {
    batchSize?: number;
    eventSource?: string;
    functionName?: string;
    isActive?: boolean;
    lastModified?: Date;
    parameters?: Map<string, string>;
    role?: string;
    status?: string;
    uuid?: string;
}
