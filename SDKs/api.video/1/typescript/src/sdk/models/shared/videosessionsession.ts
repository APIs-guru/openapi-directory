import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VideoSessionSession extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endedAt" })
  endedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=loadedAt" })
  loadedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;
}
