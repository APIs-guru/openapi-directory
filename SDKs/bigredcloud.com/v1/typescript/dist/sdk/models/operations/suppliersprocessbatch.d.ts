import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SuppliersProcessBatchRequest extends SpeakeasyBase {
    request: shared.BatchItemSupplierDto[];
}
export declare class SuppliersProcessBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    suppliersProcessBatch200ApplicationJsonObject?: Map<string, any>;
}
