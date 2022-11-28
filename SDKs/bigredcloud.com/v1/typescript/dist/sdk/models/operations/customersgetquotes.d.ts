import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomersGetQuotesPathParams extends SpeakeasyBase {
    itemId: number;
}
export declare class CustomersGetQuotesRequest extends SpeakeasyBase {
    pathParams: CustomersGetQuotesPathParams;
}
export declare class CustomersGetQuotesResponse extends SpeakeasyBase {
    contentType: string;
    quoteDtos?: shared.QuoteDto[];
    statusCode: number;
}
