import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SshKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=public_key" })
  publicKey?: string;
}
