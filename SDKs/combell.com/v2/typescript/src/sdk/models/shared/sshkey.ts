import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SshKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey?: string;
}
