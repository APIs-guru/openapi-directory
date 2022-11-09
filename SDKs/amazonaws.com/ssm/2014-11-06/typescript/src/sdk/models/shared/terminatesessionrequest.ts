import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TerminateSessionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SessionId" })
  sessionId: string;
}
