import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";

export const ConfirmPaymentServerList = [
	"http://api.climatekuul.com:8000/footprint",
] as const;


export class ConfirmPaymentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=apiKey_l1;" })
  apiKeyL1: string;

  @SpeakeasyMetadata({ data: "form, name=apiKey_l2;" })
  apiKeyL2: string;

  @SpeakeasyMetadata({ data: "form, name=confirmPayment;" })
  confirmPayment: string;

  @SpeakeasyMetadata({ data: "form, name=paymentID;" })
  paymentId: number;

  @SpeakeasyMetadata({ data: "form, name=transaction_id;" })
  transactionId: string;
}


export class ConfirmPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ConfirmPaymentRequestBody;
}


export class ConfirmPaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
