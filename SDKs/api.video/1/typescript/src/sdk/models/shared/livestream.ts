import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiveStreamAssets } from "./livestreamassets";



export class LiveStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets?: LiveStreamAssets;

  @SpeakeasyMetadata({ data: "json, name=broadcasting" })
  broadcasting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=liveStreamId" })
  liveStreamId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=playerId" })
  playerId?: string;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=record" })
  record?: boolean;

  @SpeakeasyMetadata({ data: "json, name=streamKey" })
  streamKey?: string;
}
