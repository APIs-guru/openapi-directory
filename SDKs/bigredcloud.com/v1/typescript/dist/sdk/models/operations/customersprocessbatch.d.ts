import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomersProcessBatchRequest extends SpeakeasyBase {
    request: shared.BatchItemCustomerDto[];
}
export declare class CustomersProcessBatchResponse extends SpeakeasyBase {
    contentType: string;
    customersProcessBatch200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
