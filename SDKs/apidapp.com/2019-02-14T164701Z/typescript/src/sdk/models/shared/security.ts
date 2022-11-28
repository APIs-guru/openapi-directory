import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeKey2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X-Api-Key" })
  apiKey: string;
}
