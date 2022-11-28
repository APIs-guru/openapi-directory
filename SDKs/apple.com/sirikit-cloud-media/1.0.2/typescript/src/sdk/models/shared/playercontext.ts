import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlayerContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityIdentifier" })
  activityIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=contentIdentifier" })
  contentIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=offsetInMillis" })
  offsetInMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=playbackSpeed" })
  playbackSpeed?: number;

  @SpeakeasyMetadata({ data: "json, name=queueIdentifier" })
  queueIdentifier?: string;
}
