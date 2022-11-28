import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";

export const ConfirmPaymentOfTransaction1ServerList = [
	"http://api.climatekuul.com:8000/footprint",
] as const;


export class ConfirmPaymentOfTransaction1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=confirmTransaction;" })
  confirmTransaction: string;

  @SpeakeasyMetadata({ data: "form, name=transaction_id;" })
  transactionId: string;
}


export class ConfirmPaymentOfTransaction1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ConfirmPaymentOfTransaction1RequestBody;
}


export class ConfirmPaymentOfTransaction1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
