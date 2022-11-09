import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamHealthEnum } from "./streamhealthenum";
import { StreamStateEnum } from "./streamstateenum";


// Stream
/** 
 * Specifies a live video stream that has been ingested and distributed.
**/
export class Stream extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelArn" })
  channelArn?: string;

  @Metadata({ data: "json, name=health" })
  health?: StreamHealthEnum;

  @Metadata({ data: "json, name=playbackUrl" })
  playbackUrl?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=state" })
  state?: StreamStateEnum;

  @Metadata({ data: "json, name=viewerCount" })
  viewerCount?: number;
}
