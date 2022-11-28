import { SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceDeal } from "./marketplacedeal";
import { Proposal } from "./proposal";
export declare class EditAllOrderDealsRequest extends SpeakeasyBase {
    deals?: MarketplaceDeal[];
    proposal?: Proposal;
    proposalRevisionNumber?: string;
    updateAction?: string;
}
