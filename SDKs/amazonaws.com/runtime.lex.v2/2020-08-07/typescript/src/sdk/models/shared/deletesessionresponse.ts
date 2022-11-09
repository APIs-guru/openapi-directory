import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSessionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botAliasId" })
  botAliasId?: string;

  @Metadata({ data: "json, name=botId" })
  botId?: string;

  @Metadata({ data: "json, name=localeId" })
  localeId?: string;

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;
}
