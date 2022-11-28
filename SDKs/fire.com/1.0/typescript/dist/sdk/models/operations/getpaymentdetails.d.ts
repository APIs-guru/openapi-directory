import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentDetailsPathParams extends SpeakeasyBase {
    paymentUuid: string;
}
export declare enum GetPaymentDetailsPaymentRequestStatusEnum {
    AwaitingAuthorisation = "AWAITING_AUTHORISATION",
    Authorised = "AUTHORISED",
    AwaitingMultiAuthorisation = "AWAITING_MULTI_AUTHORISATION",
    NotAuthorised = "NOT_AUTHORISED",
    Paid = "PAID",
    Rejected = "REJECTED",
    Accepted = "ACCEPTED",
    Received = "RECEIVED"
}
export declare enum GetPaymentDetailsPaymentRequestTransactionTypeEnum {
    RefundRequest = "REFUND_REQUEST",
    Payment = "PAYMENT"
}
export declare enum GetPaymentDetailsPaymentRequestTypeEnum {
    Other = "OTHER"
}
export declare class GetPaymentDetailsPaymentRequest extends SpeakeasyBase {
    additionalFields?: string;
    amount?: number;
    collectFields?: string;
    currency?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;
    description?: string;
    expiry?: Date;
    icanTo?: number;
    mandatoryFields?: string;
    maxNumberPayments?: number;
    myRef?: string;
    orderDetails?: shared.OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails;
    paymentRequestCode?: string;
    paymentUuid?: string;
    returnUrl?: string;
    status?: GetPaymentDetailsPaymentRequestStatusEnum;
    transactionType?: GetPaymentDetailsPaymentRequestTransactionTypeEnum;
    type?: GetPaymentDetailsPaymentRequestTypeEnum;
    webhookUrl?: string;
}
export declare class GetPaymentDetailsRequest extends SpeakeasyBase {
    pathParams: GetPaymentDetailsPathParams;
}
export declare class GetPaymentDetailsResponse extends SpeakeasyBase {
    contentType: string;
    paymentRequest?: GetPaymentDetailsPaymentRequest;
    statusCode: number;
}
