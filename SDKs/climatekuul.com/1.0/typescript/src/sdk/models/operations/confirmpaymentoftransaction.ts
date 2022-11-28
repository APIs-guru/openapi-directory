import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";

export const ConfirmPaymentOfTransactionServerList = [
	"http://api.climatekuul.com:8000/footprint",
] as const;


export class ConfirmPaymentOfTransactionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=confirmTransaction;" })
  confirmTransaction: string;

  @SpeakeasyMetadata({ data: "form, name=transaction_id;" })
  transactionId: string;
}


export class ConfirmPaymentOfTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ConfirmPaymentOfTransactionRequestBody;
}


export class ConfirmPaymentOfTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
