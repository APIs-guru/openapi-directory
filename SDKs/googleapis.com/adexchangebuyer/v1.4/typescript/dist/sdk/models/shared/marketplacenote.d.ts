import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A proposal is associated with a bunch of notes which may optionally be associated with a deal and/or revision number.
**/
export declare class MarketplaceNote extends SpeakeasyBase {
    creatorRole?: string;
    dealId?: string;
    kind?: string;
    note?: string;
    noteId?: string;
    proposalId?: string;
    proposalRevisionNumber?: string;
    timestampMs?: string;
}
