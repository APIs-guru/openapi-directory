import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateCustomKeyStoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId?: string;
}
