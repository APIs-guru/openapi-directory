import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiInvoiceAllcategoriesQueryParams extends SpeakeasyBase {
    query?: string;
}
export declare class GetApiInvoiceAllcategoriesHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class GetApiInvoiceAllcategoriesRequest extends SpeakeasyBase {
    queryParams: GetApiInvoiceAllcategoriesQueryParams;
    headers: GetApiInvoiceAllcategoriesHeaders;
}
export declare class GetApiInvoiceAllcategoriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    listResultInvoiceCategoryApiModel?: shared.ListResultInvoiceCategoryApiModel;
    statusCode: number;
}
