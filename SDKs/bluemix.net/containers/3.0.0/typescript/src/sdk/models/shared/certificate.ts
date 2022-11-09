import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Certificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=ca_cert" })
  caCert: string;

  @Metadata({ data: "json, name=server_cert" })
  serverCert: string;

  @Metadata({ data: "json, name=user_cert" })
  userCert: string;

  @Metadata({ data: "json, name=user_key" })
  userKey: string;
}
