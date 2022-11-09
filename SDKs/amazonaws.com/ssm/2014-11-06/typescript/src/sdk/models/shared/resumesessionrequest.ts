import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResumeSessionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SessionId" })
  sessionId: string;
}
