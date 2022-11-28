import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X-APISETU-APIKEY" })
  apiKey: string;
}


export class SchemeClientId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X-APISETU-CLIENTID" })
  apiKey: string;
}
