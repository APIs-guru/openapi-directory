import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisconnectCustomKeyStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId: string;
}
