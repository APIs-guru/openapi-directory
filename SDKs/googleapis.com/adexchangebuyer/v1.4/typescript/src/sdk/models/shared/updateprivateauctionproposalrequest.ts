import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MarketplaceNote } from "./marketplacenote";


export class UpdatePrivateAuctionProposalRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalDealId" })
  externalDealId?: string;

  @Metadata({ data: "json, name=note" })
  note?: MarketplaceNote;

  @Metadata({ data: "json, name=proposalRevisionNumber" })
  proposalRevisionNumber?: string;

  @Metadata({ data: "json, name=updateAction" })
  updateAction?: string;
}
