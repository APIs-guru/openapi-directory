import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NewPaymentRequestNewPaymentRequestCurrencyEnum {
    Eur = "EUR",
    Gbp = "GBP"
}
export declare class NewPaymentRequestNewPaymentRequestOrderDetails extends SpeakeasyBase {
    comment1?: string;
    comment2?: string;
    customerNumber?: string;
    deliveryAddressLine1?: string;
    deliveryAddressLine2?: string;
    deliveryCity?: string;
    deliveryCountry?: string;
    deliveryPostCode?: string;
    merchantCustomerIdentification?: string;
    merchantNumber?: string;
    orderId?: string;
    productId?: string;
    variableReference?: string;
}
export declare enum NewPaymentRequestNewPaymentRequestTypeEnum {
    Other = "OTHER"
}
export declare class NewPaymentRequestNewPaymentRequest extends SpeakeasyBase {
    additionalFields?: string;
    amount?: number;
    collectFields?: string;
    currency: NewPaymentRequestNewPaymentRequestCurrencyEnum;
    description: string;
    expiry?: Date;
    icanTo: number;
    mandatoryFields?: string;
    maxNumberPayments?: number;
    myRef: string;
    orderDetails?: NewPaymentRequestNewPaymentRequestOrderDetails;
    returnUrl?: string;
    type: NewPaymentRequestNewPaymentRequestTypeEnum;
}
export declare enum NewPaymentRequestNewPaymentRequestResponseTypeEnum {
    Other = "OTHER"
}
export declare class NewPaymentRequestNewPaymentRequestResponse extends SpeakeasyBase {
    code?: string;
    type?: NewPaymentRequestNewPaymentRequestResponseTypeEnum;
}
export declare class NewPaymentRequestRequest extends SpeakeasyBase {
    request: NewPaymentRequestNewPaymentRequest;
}
export declare class NewPaymentRequestResponse extends SpeakeasyBase {
    contentType: string;
    newPaymentRequestResponse?: NewPaymentRequestNewPaymentRequestResponse;
    statusCode: number;
}
