import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export const CONFIRMPAYMENT3_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
];



export class ConfirmPayment3RequestBody extends SpeakeasyBase {
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


export class ConfirmPayment3Request extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ConfirmPayment3RequestBody;
}


export class ConfirmPayment3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
