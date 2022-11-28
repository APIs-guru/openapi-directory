import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
/**
 * An object describing a Kinesis video stream.
**/
export declare class StreamInfo extends SpeakeasyBase {
    creationTime?: Date;
    dataRetentionInHours?: number;
    deviceName?: string;
    kmsKeyId?: string;
    mediaType?: string;
    status?: StatusEnum;
    streamArn?: string;
    streamName?: string;
    version?: string;
}
