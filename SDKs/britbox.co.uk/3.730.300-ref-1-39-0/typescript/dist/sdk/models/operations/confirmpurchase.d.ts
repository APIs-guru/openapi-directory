import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfirmPurchasePathParams extends SpeakeasyBase {
    platform: string;
}
export declare class ConfirmPurchaseQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class ConfirmPurchaseSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class ConfirmPurchaseRequest extends SpeakeasyBase {
    pathParams: ConfirmPurchasePathParams;
    queryParams: ConfirmPurchaseQueryParams;
    request: shared.ItvPurchaseRequest;
    security: ConfirmPurchaseSecurity;
}
export declare class ConfirmPurchaseResponse extends SpeakeasyBase {
    contentType: string;
    itvPurchase?: shared.ItvPurchase;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
