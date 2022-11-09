import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeApiKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=X-APISETU-APIKEY" })
  apiKey: string;
}


export class SchemeClientId extends SpeakeasyBase {
  @Metadata({ data: "security, name=X-APISETU-CLIENTID" })
  apiKey: string;
}
