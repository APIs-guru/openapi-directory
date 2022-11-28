import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInventoryQueryParams extends SpeakeasyBase {
    externalSkuNames?: string[];
    limit?: number;
    merchantIds?: number[];
    page?: number;
}
export declare class GetInventorySecurity extends SpeakeasyBase {
    fdcAuth: shared.SchemeFdcAuth;
}
/**
 * Item this inventory data is based on
**/
export declare class GetInventoryItemInventoryArrayV2ItemInventoryV2Item extends SpeakeasyBase {
    id?: number;
    skuReference?: string;
}
/**
 * Merchant that owns this item
**/
export declare class GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant extends SpeakeasyBase {
    name?: string;
}
export declare class GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal extends SpeakeasyBase {
    availableToPromise?: number;
}
export declare class GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity extends SpeakeasyBase {
    total?: GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal;
}
export declare class GetInventoryItemInventoryArrayV2ItemInventoryV2 extends SpeakeasyBase {
    item?: GetInventoryItemInventoryArrayV2ItemInventoryV2Item;
    merchant?: GetInventoryItemInventoryArrayV2ItemInventoryV2Merchant;
    quantity?: GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity;
}
export declare class GetInventoryItemInventoryArrayV2MetaPaginationV2 extends SpeakeasyBase {
    count?: number;
    currentPage?: number;
    total?: number;
    totalPages?: number;
}
export declare class GetInventoryItemInventoryArrayV2Meta extends SpeakeasyBase {
    pagination?: GetInventoryItemInventoryArrayV2MetaPaginationV2;
}
export declare class GetInventoryItemInventoryArrayV2 extends SpeakeasyBase {
    data?: GetInventoryItemInventoryArrayV2ItemInventoryV2[];
    meta?: GetInventoryItemInventoryArrayV2Meta;
}
export declare class GetInventoryRequest extends SpeakeasyBase {
    queryParams: GetInventoryQueryParams;
    security: GetInventorySecurity;
}
export declare class GetInventoryResponse extends SpeakeasyBase {
    contentType: string;
    itemInventoryArrayV2?: GetInventoryItemInventoryArrayV2;
    statusCode: number;
    oneordersGetResponses404ContentApplication1jsonSchema?: shared.OneordersGetResponses404ContentApplication1jsonSchema;
}
