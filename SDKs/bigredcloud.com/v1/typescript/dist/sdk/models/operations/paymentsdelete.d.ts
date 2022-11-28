import { SpeakeasyBase } from "../../../internal/utils";
export declare class PaymentsDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class PaymentsDeleteQueryParams extends SpeakeasyBase {
    timestamp: string;
}
export declare class PaymentsDeleteRequest extends SpeakeasyBase {
    pathParams: PaymentsDeletePathParams;
    queryParams: PaymentsDeleteQueryParams;
}
export declare class PaymentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    paymentsDelete200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
