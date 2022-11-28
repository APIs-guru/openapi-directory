import { SpeakeasyBase } from "../../../internal/utils";
export declare class SalesInvoicesDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class SalesInvoicesDeleteQueryParams extends SpeakeasyBase {
    timestamp: string;
}
export declare class SalesInvoicesDeleteRequest extends SpeakeasyBase {
    pathParams: SalesInvoicesDeletePathParams;
    queryParams: SalesInvoicesDeleteQueryParams;
}
export declare class SalesInvoicesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    salesInvoicesDelete200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
