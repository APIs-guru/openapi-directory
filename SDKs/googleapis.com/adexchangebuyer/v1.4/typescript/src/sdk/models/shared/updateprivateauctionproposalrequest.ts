import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceNote } from "./marketplacenote";



export class UpdatePrivateAuctionProposalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalDealId" })
  externalDealId?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: MarketplaceNote;

  @SpeakeasyMetadata({ data: "json, name=proposalRevisionNumber" })
  proposalRevisionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=updateAction" })
  updateAction?: string;
}
