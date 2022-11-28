import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateCustomKeyStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudHsmClusterId" })
  cloudHsmClusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId: string;

  @SpeakeasyMetadata({ data: "json, name=KeyStorePassword" })
  keyStorePassword?: string;

  @SpeakeasyMetadata({ data: "json, name=NewCustomKeyStoreName" })
  newCustomKeyStoreName?: string;
}
