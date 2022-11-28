import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SshKeyDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=linux_hostings" })
  linuxHostings?: string[];

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey?: string;
}
