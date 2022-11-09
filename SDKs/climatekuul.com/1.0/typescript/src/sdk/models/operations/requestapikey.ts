import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export const REQUESTAPIKEY_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
];



export class RequestApiKeyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=apiKey_l1;" })
  apiKeyL1: string;

  @Metadata({ data: "form, name=apiKey_l2;" })
  apiKeyL2: string;

  @Metadata({ data: "form, name=email;" })
  email: string;

  @Metadata({ data: "form, name=password;" })
  password: number;

  @Metadata({ data: "form, name=userFirstName;" })
  userFirstName: string;

  @Metadata({ data: "form, name=userLastName;" })
  userLastName: string;
}


export class RequestApiKeyRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: RequestApiKeyRequestBody;
}


export class RequestApiKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
