import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppConfigPlayback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chainPlayCountdown" })
  chainPlayCountdown: number;

  @SpeakeasyMetadata({ data: "json, name=chainPlaySqueezeback" })
  chainPlaySqueezeback: number;

  @SpeakeasyMetadata({ data: "json, name=chainPlayTimeout" })
  chainPlayTimeout: number;

  @SpeakeasyMetadata({ data: "json, name=heartbeatFrequency" })
  heartbeatFrequency: number;

  @SpeakeasyMetadata({ data: "json, name=viewEventPoints" })
  viewEventPoints: number[];
}
