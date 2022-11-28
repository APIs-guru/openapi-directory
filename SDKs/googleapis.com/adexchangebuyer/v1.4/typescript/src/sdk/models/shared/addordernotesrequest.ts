import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceNote } from "./marketplacenote";



export class AddOrderNotesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notes", elemType: MarketplaceNote })
  notes?: MarketplaceNote[];
}
