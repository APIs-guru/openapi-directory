import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceDeal } from "./marketplacedeal";
import { Proposal } from "./proposal";



export class EditAllOrderDealsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deals", elemType: MarketplaceDeal })
  deals?: MarketplaceDeal[];

  @SpeakeasyMetadata({ data: "json, name=proposal" })
  proposal?: Proposal;

  @SpeakeasyMetadata({ data: "json, name=proposalRevisionNumber" })
  proposalRevisionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=updateAction" })
  updateAction?: string;
}
