import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppConfigPlayback extends SpeakeasyBase {
  @Metadata({ data: "json, name=chainPlayCountdown" })
  chainPlayCountdown: number;

  @Metadata({ data: "json, name=chainPlaySqueezeback" })
  chainPlaySqueezeback: number;

  @Metadata({ data: "json, name=chainPlayTimeout" })
  chainPlayTimeout: number;

  @Metadata({ data: "json, name=heartbeatFrequency" })
  heartbeatFrequency: number;

  @Metadata({ data: "json, name=viewEventPoints" })
  viewEventPoints: number[];
}
