import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TerminateSessionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SessionId" })
  sessionId?: string;
}
