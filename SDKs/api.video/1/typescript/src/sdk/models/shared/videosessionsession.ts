import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VideoSessionSession extends SpeakeasyBase {
  @Metadata({ data: "json, name=endedAt" })
  endedAt?: Date;

  @Metadata({ data: "json, name=loadedAt" })
  loadedAt?: Date;

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;
}
