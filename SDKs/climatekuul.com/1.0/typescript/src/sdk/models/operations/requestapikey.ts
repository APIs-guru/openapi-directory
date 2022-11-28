import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";

export const RequestApiKeyServerList = [
	"http://api.climatekuul.com:8000/footprint",
] as const;


export class RequestApiKeyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=apiKey_l1;" })
  apiKeyL1: string;

  @SpeakeasyMetadata({ data: "form, name=apiKey_l2;" })
  apiKeyL2: string;

  @SpeakeasyMetadata({ data: "form, name=email;" })
  email: string;

  @SpeakeasyMetadata({ data: "form, name=password;" })
  password: number;

  @SpeakeasyMetadata({ data: "form, name=userFirstName;" })
  userFirstName: string;

  @SpeakeasyMetadata({ data: "form, name=userLastName;" })
  userLastName: string;
}


export class RequestApiKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: RequestApiKeyRequestBody;
}


export class RequestApiKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
