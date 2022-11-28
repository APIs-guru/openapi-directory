import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";

export const ConfirmsPlanting2ServerList = [
	"http://api.climatekuul.com:8000/footprint",
] as const;


export class ConfirmsPlanting2RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=apiKey_l1;" })
  apiKeyL1: string;

  @SpeakeasyMetadata({ data: "form, name=apiKey_l2;" })
  apiKeyL2: string;

  @SpeakeasyMetadata({ data: "form, name=confirmPlanting;" })
  confirmPlanting: string;

  @SpeakeasyMetadata({ data: "form, name=transaction_id;" })
  transactionId: string;
}


export class ConfirmsPlanting2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ConfirmsPlanting2RequestBody;
}


export class ConfirmsPlanting2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
