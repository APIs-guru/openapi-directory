import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NewPaymentRequestNewPaymentRequestCurrencyEnum {
    Eur = "EUR"
,    Gbp = "GBP"
}


export class NewPaymentRequestNewPaymentRequestOrderDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment1" })
  comment1?: string;

  @Metadata({ data: "json, name=comment2" })
  comment2?: string;

  @Metadata({ data: "json, name=customerNumber" })
  customerNumber?: string;

  @Metadata({ data: "json, name=deliveryAddressLine1" })
  deliveryAddressLine1?: string;

  @Metadata({ data: "json, name=deliveryAddressLine2" })
  deliveryAddressLine2?: string;

  @Metadata({ data: "json, name=deliveryCity" })
  deliveryCity?: string;

  @Metadata({ data: "json, name=deliveryCountry" })
  deliveryCountry?: string;

  @Metadata({ data: "json, name=deliveryPostCode" })
  deliveryPostCode?: string;

  @Metadata({ data: "json, name=merchantCustomerIdentification" })
  merchantCustomerIdentification?: string;

  @Metadata({ data: "json, name=merchantNumber" })
  merchantNumber?: string;

  @Metadata({ data: "json, name=orderId" })
  orderId?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=variableReference" })
  variableReference?: string;
}

export enum NewPaymentRequestNewPaymentRequestTypeEnum {
    Other = "OTHER"
}


export class NewPaymentRequestNewPaymentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalFields" })
  additionalFields?: string;

  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=collectFields" })
  collectFields?: string;

  @Metadata({ data: "json, name=currency" })
  currency: NewPaymentRequestNewPaymentRequestCurrencyEnum;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=expiry" })
  expiry?: Date;

  @Metadata({ data: "json, name=icanTo" })
  icanTo: number;

  @Metadata({ data: "json, name=mandatoryFields" })
  mandatoryFields?: string;

  @Metadata({ data: "json, name=maxNumberPayments" })
  maxNumberPayments?: number;

  @Metadata({ data: "json, name=myRef" })
  myRef: string;

  @Metadata({ data: "json, name=orderDetails" })
  orderDetails?: NewPaymentRequestNewPaymentRequestOrderDetails;

  @Metadata({ data: "json, name=returnUrl" })
  returnUrl?: string;

  @Metadata({ data: "json, name=type" })
  type: NewPaymentRequestNewPaymentRequestTypeEnum;
}


export class NewPaymentRequestRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: NewPaymentRequestNewPaymentRequest;
}

export enum NewPaymentRequestNewPaymentRequestResponseTypeEnum {
    Other = "OTHER"
}


export class NewPaymentRequestNewPaymentRequestResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=type" })
  type?: NewPaymentRequestNewPaymentRequestResponseTypeEnum;
}


export class NewPaymentRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  newPaymentRequestResponse?: NewPaymentRequestNewPaymentRequestResponse;

  @Metadata()
  statusCode: number;
}
