import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCustomKeyStoreRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId: string;
}
