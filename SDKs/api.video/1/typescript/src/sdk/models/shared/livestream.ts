import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LiveStreamAssets } from "./livestreamassets";


export class LiveStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets?: LiveStreamAssets;

  @Metadata({ data: "json, name=broadcasting" })
  broadcasting?: boolean;

  @Metadata({ data: "json, name=liveStreamId" })
  liveStreamId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=playerId" })
  playerId?: string;

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=record" })
  record?: boolean;

  @Metadata({ data: "json, name=streamKey" })
  streamKey?: string;
}
