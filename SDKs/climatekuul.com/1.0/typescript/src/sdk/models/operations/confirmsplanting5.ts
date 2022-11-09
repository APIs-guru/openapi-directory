import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export const CONFIRMSPLANTING5_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
];



export class ConfirmsPlanting5RequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=apiKey_l1;" })
  apiKeyL1: string;

  @Metadata({ data: "form, name=apiKey_l2;" })
  apiKeyL2: string;

  @Metadata({ data: "form, name=confirmPlanting;" })
  confirmPlanting: string;

  @Metadata({ data: "form, name=transaction_id;" })
  transactionId: string;
}


export class ConfirmsPlanting5Request extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ConfirmsPlanting5RequestBody;
}


export class ConfirmsPlanting5Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
