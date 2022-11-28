import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";

export const ConfirmCarbonOffset4ServerList = [
	"http://api.climatekuul.com:8000/footprint",
] as const;


export class ConfirmCarbonOffset4RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=carbonOffset;" })
  carbonOffset: string;

  @SpeakeasyMetadata({ data: "form, name=contactEmail;" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "form, name=contactFirstName;" })
  contactFirstName?: string;

  @SpeakeasyMetadata({ data: "form, name=contactLastName;" })
  contactLastName?: string;

  @SpeakeasyMetadata({ data: "form, name=transaction_id;" })
  transactionId: string;
}


export class ConfirmCarbonOffset4Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ConfirmCarbonOffset4RequestBody;
}


export class ConfirmCarbonOffset4Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
