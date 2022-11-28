import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a segment of video or other time-delimited data.
**/
export declare class Fragment extends SpeakeasyBase {
    fragmentLengthInMilliseconds?: number;
    fragmentNumber?: string;
    fragmentSizeInBytes?: number;
    producerTimestamp?: Date;
    serverTimestamp?: Date;
}
