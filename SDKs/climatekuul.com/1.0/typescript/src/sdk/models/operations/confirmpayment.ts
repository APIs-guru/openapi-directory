import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export const CONFIRMPAYMENT_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
];



export class ConfirmPaymentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=apiKey_l1;" })
  apiKeyL1: string;

  @Metadata({ data: "form, name=apiKey_l2;" })
  apiKeyL2: string;

  @Metadata({ data: "form, name=confirmPayment;" })
  confirmPayment: string;

  @Metadata({ data: "form, name=paymentID;" })
  paymentId: number;

  @Metadata({ data: "form, name=transaction_id;" })
  transactionId: string;
}


export class ConfirmPaymentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ConfirmPaymentRequestBody;
}


export class ConfirmPaymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
