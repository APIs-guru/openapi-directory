import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";

export const ConfirmPaymentOfTransaction5ServerList = [
	"http://api.climatekuul.com:8000/footprint",
] as const;


export class ConfirmPaymentOfTransaction5RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=confirmTransaction;" })
  confirmTransaction: string;

  @SpeakeasyMetadata({ data: "form, name=transaction_id;" })
  transactionId: string;
}


export class ConfirmPaymentOfTransaction5Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ConfirmPaymentOfTransaction5RequestBody;
}


export class ConfirmPaymentOfTransaction5Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
