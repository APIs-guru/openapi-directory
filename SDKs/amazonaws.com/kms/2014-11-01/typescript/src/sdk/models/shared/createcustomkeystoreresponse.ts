import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateCustomKeyStoreResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId?: string;
}
