import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SessionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;
}
