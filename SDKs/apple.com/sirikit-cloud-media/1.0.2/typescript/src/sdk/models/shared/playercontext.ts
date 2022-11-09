import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlayerContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityIdentifier" })
  activityIdentifier?: string;

  @Metadata({ data: "json, name=contentIdentifier" })
  contentIdentifier?: string;

  @Metadata({ data: "json, name=offsetInMillis" })
  offsetInMillis?: number;

  @Metadata({ data: "json, name=playbackSpeed" })
  playbackSpeed?: number;

  @Metadata({ data: "json, name=queueIdentifier" })
  queueIdentifier?: string;
}
