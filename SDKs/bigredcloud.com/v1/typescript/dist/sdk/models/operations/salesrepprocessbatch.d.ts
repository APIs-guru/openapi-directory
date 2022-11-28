import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SalesRepProcessBatchRequest extends SpeakeasyBase {
    request: shared.BatchItemSaleRepsDto[];
}
export declare class SalesRepProcessBatchResponse extends SpeakeasyBase {
    contentType: string;
    salesRepProcessBatch200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
