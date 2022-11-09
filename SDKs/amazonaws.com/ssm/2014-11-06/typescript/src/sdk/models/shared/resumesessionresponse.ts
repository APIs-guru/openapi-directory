import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResumeSessionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=StreamUrl" })
  streamUrl?: string;

  @Metadata({ data: "json, name=TokenValue" })
  tokenValue?: string;
}
