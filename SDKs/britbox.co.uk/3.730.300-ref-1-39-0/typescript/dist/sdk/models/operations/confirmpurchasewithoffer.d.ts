import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfirmPurchaseWithOfferPathParams extends SpeakeasyBase {
    platform: string;
}
export declare class ConfirmPurchaseWithOfferQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class ConfirmPurchaseWithOfferSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class ConfirmPurchaseWithOfferRequest extends SpeakeasyBase {
    pathParams: ConfirmPurchaseWithOfferPathParams;
    queryParams: ConfirmPurchaseWithOfferQueryParams;
    request: shared.ItvPurchaseWithOfferRequest;
    security: ConfirmPurchaseWithOfferSecurity;
}
export declare class ConfirmPurchaseWithOfferResponse extends SpeakeasyBase {
    contentType: string;
    itvPurchaseWithOfferResponse?: shared.ItvPurchaseWithOfferResponse;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
