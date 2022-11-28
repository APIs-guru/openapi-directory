import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Certificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ca_cert" })
  caCert: string;

  @SpeakeasyMetadata({ data: "json, name=server_cert" })
  serverCert: string;

  @SpeakeasyMetadata({ data: "json, name=user_cert" })
  userCert: string;

  @SpeakeasyMetadata({ data: "json, name=user_key" })
  userKey: string;
}
