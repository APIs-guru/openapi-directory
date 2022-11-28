import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LiveStreamCreatePayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=playerId" })
  playerId?: string;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=record" })
  record?: boolean;
}
