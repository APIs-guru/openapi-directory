import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines a segment of inventory that buyer wants to buy. It's created by buyer and could be shared with multiple buyers.
**/
export declare class AuctionPackage extends SpeakeasyBase {
    createTime?: string;
    creator?: string;
    description?: string;
    displayName?: string;
    name?: string;
    subscribedClients?: string[];
    updateTime?: string;
}
