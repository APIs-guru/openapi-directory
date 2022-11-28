import { SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceNote } from "./marketplacenote";
export declare class UpdatePrivateAuctionProposalRequest extends SpeakeasyBase {
    externalDealId?: string;
    note?: MarketplaceNote;
    proposalRevisionNumber?: string;
    updateAction?: string;
}
