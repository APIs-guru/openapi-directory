import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TerminateSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SessionId" })
  sessionId?: string;
}
