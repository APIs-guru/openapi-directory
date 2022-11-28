import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentLinkApiAllQueryParams extends SpeakeasyBase {
    queryOptionsPage?: number;
    queryOptionsPageSize?: number;
}
export declare class PaymentLinkApiAllHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class PaymentLinkApiAllRequest extends SpeakeasyBase {
    queryParams: PaymentLinkApiAllQueryParams;
    headers: PaymentLinkApiAllHeaders;
}
export declare class PaymentLinkApiAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    listResultPaymentLink?: shared.ListResultPaymentLink;
    statusCode: number;
}
