import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TerminateSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SessionId" })
  sessionId: string;
}
