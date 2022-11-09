import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeApikey extends SpeakeasyBase {
  @Metadata({ data: "security, name=Apikey" })
  apiKey: string;
}
