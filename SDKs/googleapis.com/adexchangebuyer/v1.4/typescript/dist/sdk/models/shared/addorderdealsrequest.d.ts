import { SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceDeal } from "./marketplacedeal";
export declare class AddOrderDealsRequest extends SpeakeasyBase {
    deals?: MarketplaceDeal[];
    proposalRevisionNumber?: string;
    updateAction?: string;
}
