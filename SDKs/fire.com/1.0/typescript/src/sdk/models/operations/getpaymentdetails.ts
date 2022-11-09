import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=paymentUuid" })
  paymentUuid: string;
}


export class GetPaymentDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPaymentDetailsPathParams;
}

export enum GetPaymentDetailsPaymentRequestStatusEnum {
    AwaitingAuthorisation = "AWAITING_AUTHORISATION"
,    Authorised = "AUTHORISED"
,    AwaitingMultiAuthorisation = "AWAITING_MULTI_AUTHORISATION"
,    NotAuthorised = "NOT_AUTHORISED"
,    Paid = "PAID"
,    Rejected = "REJECTED"
,    Accepted = "ACCEPTED"
,    Received = "RECEIVED"
}

export enum GetPaymentDetailsPaymentRequestTransactionTypeEnum {
    RefundRequest = "REFUND_REQUEST"
,    Payment = "PAYMENT"
}

export enum GetPaymentDetailsPaymentRequestTypeEnum {
    Other = "OTHER"
}


export class GetPaymentDetailsPaymentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalFields" })
  additionalFields?: string;

  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=collectFields" })
  collectFields?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expiry" })
  expiry?: Date;

  @Metadata({ data: "json, name=icanTo" })
  icanTo?: number;

  @Metadata({ data: "json, name=mandatoryFields" })
  mandatoryFields?: string;

  @Metadata({ data: "json, name=maxNumberPayments" })
  maxNumberPayments?: number;

  @Metadata({ data: "json, name=myRef" })
  myRef?: string;

  @Metadata({ data: "json, name=orderDetails" })
  orderDetails?: shared.OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails;

  @Metadata({ data: "json, name=paymentRequestCode" })
  paymentRequestCode?: string;

  @Metadata({ data: "json, name=paymentUuid" })
  paymentUuid?: string;

  @Metadata({ data: "json, name=returnUrl" })
  returnUrl?: string;

  @Metadata({ data: "json, name=status" })
  status?: GetPaymentDetailsPaymentRequestStatusEnum;

  @Metadata({ data: "json, name=transactionType" })
  transactionType?: GetPaymentDetailsPaymentRequestTransactionTypeEnum;

  @Metadata({ data: "json, name=type" })
  type?: GetPaymentDetailsPaymentRequestTypeEnum;

  @Metadata({ data: "json, name=webhookUrl" })
  webhookUrl?: string;
}


export class GetPaymentDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentRequest?: GetPaymentDetailsPaymentRequest;

  @Metadata()
  statusCode: number;
}
