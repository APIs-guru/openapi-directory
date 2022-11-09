import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisconnectCustomKeyStoreRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId: string;
}
