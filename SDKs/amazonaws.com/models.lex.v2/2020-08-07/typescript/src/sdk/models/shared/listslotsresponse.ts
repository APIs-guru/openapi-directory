import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlotSummary } from "./slotsummary";



export class ListSlotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=intentId" })
  intentId?: string;

  @SpeakeasyMetadata({ data: "json, name=localeId" })
  localeId?: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=slotSummaries", elemType: SlotSummary })
  slotSummaries?: SlotSummary[];
}
