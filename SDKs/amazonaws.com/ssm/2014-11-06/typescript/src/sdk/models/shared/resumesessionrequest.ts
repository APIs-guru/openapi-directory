import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResumeSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SessionId" })
  sessionId: string;
}
