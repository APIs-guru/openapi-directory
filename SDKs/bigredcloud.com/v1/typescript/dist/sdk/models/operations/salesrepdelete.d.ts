import { SpeakeasyBase } from "../../../internal/utils";
export declare class SalesRepDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class SalesRepDeleteQueryParams extends SpeakeasyBase {
    timestamp: string;
}
export declare class SalesRepDeleteRequest extends SpeakeasyBase {
    pathParams: SalesRepDeletePathParams;
    queryParams: SalesRepDeleteQueryParams;
}
export declare class SalesRepDeleteResponse extends SpeakeasyBase {
    contentType: string;
    salesRepDelete200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
