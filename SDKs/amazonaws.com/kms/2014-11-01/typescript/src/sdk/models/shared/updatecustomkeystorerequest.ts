import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateCustomKeyStoreRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudHsmClusterId" })
  cloudHsmClusterId?: string;

  @Metadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId: string;

  @Metadata({ data: "json, name=KeyStorePassword" })
  keyStorePassword?: string;

  @Metadata({ data: "json, name=NewCustomKeyStoreName" })
  newCustomKeyStoreName?: string;
}
