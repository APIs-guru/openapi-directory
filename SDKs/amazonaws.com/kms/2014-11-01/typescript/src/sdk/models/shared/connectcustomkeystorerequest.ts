import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConnectCustomKeyStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId: string;
}
