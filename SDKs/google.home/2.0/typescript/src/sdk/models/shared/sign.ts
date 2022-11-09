import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Sign extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate: string;

  @Metadata({ data: "json, name=intermediate_certs" })
  intermediateCerts: string[];

  @Metadata({ data: "json, name=nonce" })
  nonce: string;

  @Metadata({ data: "json, name=signed_data" })
  signedData: string;
}
