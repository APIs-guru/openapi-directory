import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botAlias" })
  botAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=botName" })
  botName?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
