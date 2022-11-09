import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeKey2 extends SpeakeasyBase {
  @Metadata({ data: "security, name=X-Api-Key" })
  apiKey: string;
}
