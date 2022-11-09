import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LiveStreamAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=hls" })
  hls?: string;

  @Metadata({ data: "json, name=iframe" })
  iframe?: string;

  @Metadata({ data: "json, name=player" })
  player?: string;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: string;
}
