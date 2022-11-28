import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCustomKeyStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId: string;
}
