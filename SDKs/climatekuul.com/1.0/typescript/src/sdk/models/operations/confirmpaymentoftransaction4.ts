import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export const CONFIRMPAYMENTOFTRANSACTION4_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
];



export class ConfirmPaymentOfTransaction4RequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=confirmTransaction;" })
  confirmTransaction: string;

  @Metadata({ data: "form, name=transaction_id;" })
  transactionId: string;
}


export class ConfirmPaymentOfTransaction4Request extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ConfirmPaymentOfTransaction4RequestBody;
}


export class ConfirmPaymentOfTransaction4Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
