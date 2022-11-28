import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IntentSummary } from "./intentsummary";



export class ListIntentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=intentSummaries", elemType: IntentSummary })
  intentSummaries?: IntentSummary[];

  @SpeakeasyMetadata({ data: "json, name=localeId" })
  localeId?: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
