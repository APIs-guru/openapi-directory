import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProductsProcessBatchRequest extends SpeakeasyBase {
    request: shared.BatchItemProductDto[];
}
export declare class ProductsProcessBatchResponse extends SpeakeasyBase {
    contentType: string;
    productsProcessBatch200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
