import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LiveStreamAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hls" })
  hls?: string;

  @SpeakeasyMetadata({ data: "json, name=iframe" })
  iframe?: string;

  @SpeakeasyMetadata({ data: "json, name=player" })
  player?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: string;
}
