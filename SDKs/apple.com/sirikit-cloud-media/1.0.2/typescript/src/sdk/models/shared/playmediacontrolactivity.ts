import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlayMediaControlActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=playElapsed" })
  playElapsed?: number;

  @SpeakeasyMetadata({ data: "json, name=playElapsedInterval" })
  playElapsedInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=playPaused" })
  playPaused?: number;
}
