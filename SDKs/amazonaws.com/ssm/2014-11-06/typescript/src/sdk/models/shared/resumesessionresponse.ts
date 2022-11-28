import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResumeSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamUrl" })
  streamUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=TokenValue" })
  tokenValue?: string;
}
