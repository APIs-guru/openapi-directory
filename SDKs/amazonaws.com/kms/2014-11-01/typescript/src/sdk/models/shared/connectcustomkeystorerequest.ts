import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConnectCustomKeyStoreRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId: string;
}
