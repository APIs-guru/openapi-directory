import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeXFungeneratorsApiSecret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X-Fungenerators-Api-Secret" })
  apiKey: string;
}
