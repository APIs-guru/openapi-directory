import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamHealthEnum } from "./streamhealthenum";
import { StreamStateEnum } from "./streamstateenum";


// StreamSummary
/** 
 * Summary information about a stream.
**/
export class StreamSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelArn" })
  channelArn?: string;

  @Metadata({ data: "json, name=health" })
  health?: StreamHealthEnum;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=state" })
  state?: StreamStateEnum;

  @Metadata({ data: "json, name=viewerCount" })
  viewerCount?: number;
}
