import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LiveStreamUpdatePayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=playerId" })
  playerId?: string;

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=record" })
  record?: boolean;
}
