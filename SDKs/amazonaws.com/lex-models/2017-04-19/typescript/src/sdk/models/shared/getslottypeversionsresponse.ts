import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlotTypeMetadata } from "./slottypemetadata";



export class GetSlotTypeVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=slotTypes", elemType: SlotTypeMetadata })
  slotTypes?: SlotTypeMetadata[];
}
