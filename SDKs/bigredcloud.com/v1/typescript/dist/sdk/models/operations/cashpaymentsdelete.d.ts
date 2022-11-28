import { SpeakeasyBase } from "../../../internal/utils";
export declare class CashPaymentsDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class CashPaymentsDeleteQueryParams extends SpeakeasyBase {
    timestamp: string;
}
export declare class CashPaymentsDeleteRequest extends SpeakeasyBase {
    pathParams: CashPaymentsDeletePathParams;
    queryParams: CashPaymentsDeleteQueryParams;
}
export declare class CashPaymentsDeleteResponse extends SpeakeasyBase {
    cashPaymentsDelete200ApplicationJsonObject?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
