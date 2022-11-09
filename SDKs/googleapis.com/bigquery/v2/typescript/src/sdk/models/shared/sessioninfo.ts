import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SessionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;
}
