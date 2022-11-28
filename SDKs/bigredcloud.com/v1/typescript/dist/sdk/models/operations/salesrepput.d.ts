import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SalesRepPutPathParams extends SpeakeasyBase {
    id: number;
}
export declare class SalesRepPutRequest extends SpeakeasyBase {
    pathParams: SalesRepPutPathParams;
    request: shared.SaleRepsDto;
}
export declare class SalesRepPutResponse extends SpeakeasyBase {
    contentType: string;
    salesRepPut200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
