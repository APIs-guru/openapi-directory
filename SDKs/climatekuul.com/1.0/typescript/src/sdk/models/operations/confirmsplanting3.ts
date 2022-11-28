import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";

export const ConfirmsPlanting3ServerList = [
	"http://api.climatekuul.com:8000/footprint",
] as const;


export class ConfirmsPlanting3RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=apiKey_l1;" })
  apiKeyL1: string;

  @SpeakeasyMetadata({ data: "form, name=apiKey_l2;" })
  apiKeyL2: string;

  @SpeakeasyMetadata({ data: "form, name=confirmPlanting;" })
  confirmPlanting: string;

  @SpeakeasyMetadata({ data: "form, name=transaction_id;" })
  transactionId: string;
}


export class ConfirmsPlanting3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ConfirmsPlanting3RequestBody;
}


export class ConfirmsPlanting3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
