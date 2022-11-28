import { SpeakeasyBase } from "../../../internal/utils";
export declare class CashReceiptsDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class CashReceiptsDeleteQueryParams extends SpeakeasyBase {
    timestamp: string;
}
export declare class CashReceiptsDeleteRequest extends SpeakeasyBase {
    pathParams: CashReceiptsDeletePathParams;
    queryParams: CashReceiptsDeleteQueryParams;
}
export declare class CashReceiptsDeleteResponse extends SpeakeasyBase {
    cashReceiptsDelete200ApplicationJsonObject?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
