import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MarketplaceNote } from "./marketplacenote";


export class GetOrderNotesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=notes", elemType: shared.MarketplaceNote })
  notes?: MarketplaceNote[];
}
