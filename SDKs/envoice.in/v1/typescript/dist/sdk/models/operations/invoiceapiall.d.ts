import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvoiceApiAllQueryParams extends SpeakeasyBase {
    queryOptionsPage?: number;
    queryOptionsPageSize?: number;
}
export declare class InvoiceApiAllHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class InvoiceApiAllRequest extends SpeakeasyBase {
    queryParams: InvoiceApiAllQueryParams;
    headers: InvoiceApiAllHeaders;
}
export declare class InvoiceApiAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    listResultInvoiceDetailsApiModel?: shared.ListResultInvoiceDetailsApiModel;
    statusCode: number;
}
