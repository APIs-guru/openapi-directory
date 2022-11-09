import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SshKeyDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=linux_hostings" })
  linuxHostings?: string[];

  @Metadata({ data: "json, name=public_key" })
  publicKey?: string;
}
