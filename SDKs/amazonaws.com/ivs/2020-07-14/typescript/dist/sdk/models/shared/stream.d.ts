import { SpeakeasyBase } from "../../../internal/utils";
import { StreamHealthEnum } from "./streamhealthenum";
import { StreamStateEnum } from "./streamstateenum";
/**
 * Specifies a live video stream that has been ingested and distributed.
**/
export declare class Stream extends SpeakeasyBase {
    channelArn?: string;
    health?: StreamHealthEnum;
    playbackUrl?: string;
    startTime?: Date;
    state?: StreamStateEnum;
    viewerCount?: number;
}
