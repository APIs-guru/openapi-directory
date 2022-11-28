import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SalesEntriesProcessBatchRequest extends SpeakeasyBase {
    request: shared.BatchItemSalesEntryDto[];
}
export declare class SalesEntriesProcessBatchResponse extends SpeakeasyBase {
    contentType: string;
    salesEntriesProcessBatch200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
