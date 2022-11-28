import { SpeakeasyBase } from "../../../internal/utils";
export declare class SalesEntriesDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class SalesEntriesDeleteQueryParams extends SpeakeasyBase {
    timestamp: string;
}
export declare class SalesEntriesDeleteRequest extends SpeakeasyBase {
    pathParams: SalesEntriesDeletePathParams;
    queryParams: SalesEntriesDeleteQueryParams;
}
export declare class SalesEntriesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    salesEntriesDelete200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
