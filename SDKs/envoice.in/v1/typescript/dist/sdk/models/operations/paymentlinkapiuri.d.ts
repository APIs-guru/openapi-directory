import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentLinkApiUriQueryParams extends SpeakeasyBase {
    id: number;
}
export declare class PaymentLinkApiUriHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class PaymentLinkApiUriRequest extends SpeakeasyBase {
    queryParams: PaymentLinkApiUriQueryParams;
    headers: PaymentLinkApiUriHeaders;
}
export declare class PaymentLinkApiUriResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    paymentLinkUriApiModel?: shared.PaymentLinkUriApiModel;
    statusCode: number;
}
