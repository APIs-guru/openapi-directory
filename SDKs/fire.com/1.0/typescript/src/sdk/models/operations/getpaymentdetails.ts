import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentUuid" })
  paymentUuid: string;
}

export enum GetPaymentDetailsPaymentRequestStatusEnum {
    AwaitingAuthorisation = "AWAITING_AUTHORISATION",
    Authorised = "AUTHORISED",
    AwaitingMultiAuthorisation = "AWAITING_MULTI_AUTHORISATION",
    NotAuthorised = "NOT_AUTHORISED",
    Paid = "PAID",
    Rejected = "REJECTED",
    Accepted = "ACCEPTED",
    Received = "RECEIVED"
}

export enum GetPaymentDetailsPaymentRequestTransactionTypeEnum {
    RefundRequest = "REFUND_REQUEST",
    Payment = "PAYMENT"
}

export enum GetPaymentDetailsPaymentRequestTypeEnum {
    Other = "OTHER"
}


export class GetPaymentDetailsPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalFields" })
  additionalFields?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=collectFields" })
  collectFields?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expiry" })
  expiry?: Date;

  @SpeakeasyMetadata({ data: "json, name=icanTo" })
  icanTo?: number;

  @SpeakeasyMetadata({ data: "json, name=mandatoryFields" })
  mandatoryFields?: string;

  @SpeakeasyMetadata({ data: "json, name=maxNumberPayments" })
  maxNumberPayments?: number;

  @SpeakeasyMetadata({ data: "json, name=myRef" })
  myRef?: string;

  @SpeakeasyMetadata({ data: "json, name=orderDetails" })
  orderDetails?: shared.OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails;

  @SpeakeasyMetadata({ data: "json, name=paymentRequestCode" })
  paymentRequestCode?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentUuid" })
  paymentUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=returnUrl" })
  returnUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetPaymentDetailsPaymentRequestStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=transactionType" })
  transactionType?: GetPaymentDetailsPaymentRequestTransactionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetPaymentDetailsPaymentRequestTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=webhookUrl" })
  webhookUrl?: string;
}


export class GetPaymentDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentDetailsPathParams;
}


export class GetPaymentDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentRequest?: GetPaymentDetailsPaymentRequest;

  @SpeakeasyMetadata()
  statusCode: number;
}
