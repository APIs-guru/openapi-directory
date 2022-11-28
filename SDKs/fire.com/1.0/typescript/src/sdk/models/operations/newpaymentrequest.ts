import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NewPaymentRequestNewPaymentRequestCurrencyEnum {
    Eur = "EUR",
    Gbp = "GBP"
}


export class NewPaymentRequestNewPaymentRequestOrderDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment1" })
  comment1?: string;

  @SpeakeasyMetadata({ data: "json, name=comment2" })
  comment2?: string;

  @SpeakeasyMetadata({ data: "json, name=customerNumber" })
  customerNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryAddressLine1" })
  deliveryAddressLine1?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryAddressLine2" })
  deliveryAddressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryCity" })
  deliveryCity?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryCountry" })
  deliveryCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryPostCode" })
  deliveryPostCode?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantCustomerIdentification" })
  merchantCustomerIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantNumber" })
  merchantNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=variableReference" })
  variableReference?: string;
}

export enum NewPaymentRequestNewPaymentRequestTypeEnum {
    Other = "OTHER"
}


export class NewPaymentRequestNewPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalFields" })
  additionalFields?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=collectFields" })
  collectFields?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: NewPaymentRequestNewPaymentRequestCurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=expiry" })
  expiry?: Date;

  @SpeakeasyMetadata({ data: "json, name=icanTo" })
  icanTo: number;

  @SpeakeasyMetadata({ data: "json, name=mandatoryFields" })
  mandatoryFields?: string;

  @SpeakeasyMetadata({ data: "json, name=maxNumberPayments" })
  maxNumberPayments?: number;

  @SpeakeasyMetadata({ data: "json, name=myRef" })
  myRef: string;

  @SpeakeasyMetadata({ data: "json, name=orderDetails" })
  orderDetails?: NewPaymentRequestNewPaymentRequestOrderDetails;

  @SpeakeasyMetadata({ data: "json, name=returnUrl" })
  returnUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: NewPaymentRequestNewPaymentRequestTypeEnum;
}

export enum NewPaymentRequestNewPaymentRequestResponseTypeEnum {
    Other = "OTHER"
}


export class NewPaymentRequestNewPaymentRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: NewPaymentRequestNewPaymentRequestResponseTypeEnum;
}


export class NewPaymentRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: NewPaymentRequestNewPaymentRequest;
}


export class NewPaymentRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  newPaymentRequestResponse?: NewPaymentRequestNewPaymentRequestResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
