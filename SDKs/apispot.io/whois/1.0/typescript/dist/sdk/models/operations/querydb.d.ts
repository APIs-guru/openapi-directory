import { SpeakeasyBase } from "../../../internal/utils";
export declare class QueryDbQueryParams extends SpeakeasyBase {
    query: string;
}
export declare class QueryDbRequest extends SpeakeasyBase {
    queryParams: QueryDbQueryParams;
}
export declare class QueryDbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    queryDb200ApplicationJsonObject?: Map<string, any>;
}
