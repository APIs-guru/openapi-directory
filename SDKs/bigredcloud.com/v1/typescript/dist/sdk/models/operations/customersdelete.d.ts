import { SpeakeasyBase } from "../../../internal/utils";
export declare class CustomersDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class CustomersDeleteQueryParams extends SpeakeasyBase {
    timestamp: string;
}
export declare class CustomersDeleteRequest extends SpeakeasyBase {
    pathParams: CustomersDeletePathParams;
    queryParams: CustomersDeleteQueryParams;
}
export declare class CustomersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    customersDelete200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
