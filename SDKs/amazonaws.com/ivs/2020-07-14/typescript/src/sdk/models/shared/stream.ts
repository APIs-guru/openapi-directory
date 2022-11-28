import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamHealthEnum } from "./streamhealthenum";
import { StreamStateEnum } from "./streamstateenum";



// Stream
/** 
 * Specifies a live video stream that has been ingested and distributed.
**/
export class Stream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelArn" })
  channelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=health" })
  health?: StreamHealthEnum;

  @SpeakeasyMetadata({ data: "json, name=playbackUrl" })
  playbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: StreamStateEnum;

  @SpeakeasyMetadata({ data: "json, name=viewerCount" })
  viewerCount?: number;
}
