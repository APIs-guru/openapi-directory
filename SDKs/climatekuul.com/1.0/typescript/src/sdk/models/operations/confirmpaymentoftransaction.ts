import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export const CONFIRMPAYMENTOFTRANSACTION_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
];



export class ConfirmPaymentOfTransactionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=confirmTransaction;" })
  confirmTransaction: string;

  @Metadata({ data: "form, name=transaction_id;" })
  transactionId: string;
}


export class ConfirmPaymentOfTransactionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ConfirmPaymentOfTransactionRequestBody;
}


export class ConfirmPaymentOfTransactionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
