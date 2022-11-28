import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SalesRepPostRequest extends SpeakeasyBase {
    request: shared.SaleRepsDto;
}
export declare class SalesRepPostResponse extends SpeakeasyBase {
    contentType: string;
    salesRepPost200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
