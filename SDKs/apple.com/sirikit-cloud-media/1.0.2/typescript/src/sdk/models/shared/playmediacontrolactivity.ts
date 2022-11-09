import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlayMediaControlActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=playElapsed" })
  playElapsed?: number;

  @Metadata({ data: "json, name=playElapsedInterval" })
  playElapsedInterval?: number;

  @Metadata({ data: "json, name=playPaused" })
  playPaused?: number;
}
