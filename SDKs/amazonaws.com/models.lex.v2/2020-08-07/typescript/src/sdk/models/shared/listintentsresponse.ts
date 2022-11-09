import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IntentSummary } from "./intentsummary";


export class ListIntentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botId" })
  botId?: string;

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=intentSummaries", elemType: shared.IntentSummary })
  intentSummaries?: IntentSummary[];

  @Metadata({ data: "json, name=localeId" })
  localeId?: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
