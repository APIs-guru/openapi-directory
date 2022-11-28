import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateCustomKeyStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudHsmClusterId" })
  cloudHsmClusterId: string;

  @SpeakeasyMetadata({ data: "json, name=CustomKeyStoreName" })
  customKeyStoreName: string;

  @SpeakeasyMetadata({ data: "json, name=KeyStorePassword" })
  keyStorePassword: string;

  @SpeakeasyMetadata({ data: "json, name=TrustAnchorCertificate" })
  trustAnchorCertificate: string;
}
