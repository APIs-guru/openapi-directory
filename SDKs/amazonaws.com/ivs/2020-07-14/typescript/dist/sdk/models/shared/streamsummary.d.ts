import { SpeakeasyBase } from "../../../internal/utils";
import { StreamHealthEnum } from "./streamhealthenum";
import { StreamStateEnum } from "./streamstateenum";
/**
 * Summary information about a stream.
**/
export declare class StreamSummary extends SpeakeasyBase {
    channelArn?: string;
    health?: StreamHealthEnum;
    startTime?: Date;
    state?: StreamStateEnum;
    viewerCount?: number;
}
