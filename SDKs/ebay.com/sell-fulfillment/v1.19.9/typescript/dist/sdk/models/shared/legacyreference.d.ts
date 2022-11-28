import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type defining the legacyReference container. This container is needed if the seller is issuing a refund for an individual order line item, and wishes to use an item ID and transaction ID to identify the order line item.
**/
export declare class LegacyReference extends SpeakeasyBase {
    legacyItemId?: string;
    legacyTransactionId?: string;
}
