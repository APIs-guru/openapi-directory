import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSessionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botAlias" })
  botAlias?: string;

  @Metadata({ data: "json, name=botName" })
  botName?: string;

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
