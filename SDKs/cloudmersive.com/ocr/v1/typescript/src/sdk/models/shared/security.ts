import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeApikey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Apikey" })
  apiKey: string;
}
