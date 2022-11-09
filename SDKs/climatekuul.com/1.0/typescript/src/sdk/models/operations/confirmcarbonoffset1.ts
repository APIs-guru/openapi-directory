import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export const CONFIRMCARBONOFFSET1_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
];



export class ConfirmCarbonOffset1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=carbonOffset;" })
  carbonOffset: string;

  @Metadata({ data: "form, name=contactEmail;" })
  contactEmail?: string;

  @Metadata({ data: "form, name=contactFirstName;" })
  contactFirstName?: string;

  @Metadata({ data: "form, name=contactLastName;" })
  contactLastName?: string;

  @Metadata({ data: "form, name=transaction_id;" })
  transactionId: string;
}


export class ConfirmCarbonOffset1Request extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ConfirmCarbonOffset1RequestBody;
}


export class ConfirmCarbonOffset1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
