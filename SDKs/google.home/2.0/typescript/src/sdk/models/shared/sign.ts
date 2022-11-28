import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Sign extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate: string;

  @SpeakeasyMetadata({ data: "json, name=intermediate_certs" })
  intermediateCerts: string[];

  @SpeakeasyMetadata({ data: "json, name=nonce" })
  nonce: string;

  @SpeakeasyMetadata({ data: "json, name=signed_data" })
  signedData: string;
}
