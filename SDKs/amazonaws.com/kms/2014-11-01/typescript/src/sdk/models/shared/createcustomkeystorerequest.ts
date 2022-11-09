import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateCustomKeyStoreRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudHsmClusterId" })
  cloudHsmClusterId: string;

  @Metadata({ data: "json, name=CustomKeyStoreName" })
  customKeyStoreName: string;

  @Metadata({ data: "json, name=KeyStorePassword" })
  keyStorePassword: string;

  @Metadata({ data: "json, name=TrustAnchorCertificate" })
  trustAnchorCertificate: string;
}
