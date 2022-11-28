import { SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceDeal } from "./marketplacedeal";
export declare class EditAllOrderDealsResponse extends SpeakeasyBase {
    deals?: MarketplaceDeal[];
    orderRevisionNumber?: string;
}
