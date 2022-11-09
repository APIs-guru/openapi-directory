import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SlotTypeMetadata } from "./slottypemetadata";


export class GetSlotTypeVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=slotTypes", elemType: shared.SlotTypeMetadata })
  slotTypes?: SlotTypeMetadata[];
}
