import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlotTypeSummary } from "./slottypesummary";



export class ListSlotTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=localeId" })
  localeId?: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=slotTypeSummaries", elemType: SlotTypeSummary })
  slotTypeSummaries?: SlotTypeSummary[];
}
