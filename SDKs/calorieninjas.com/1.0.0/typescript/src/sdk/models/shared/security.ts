import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeXapiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=api_key" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xApiKey: SchemeXapiKey;
}
