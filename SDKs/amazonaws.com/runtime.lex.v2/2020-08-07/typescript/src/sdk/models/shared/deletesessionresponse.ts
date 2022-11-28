import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botAliasId" })
  botAliasId?: string;

  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;

  @SpeakeasyMetadata({ data: "json, name=localeId" })
  localeId?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;
}
