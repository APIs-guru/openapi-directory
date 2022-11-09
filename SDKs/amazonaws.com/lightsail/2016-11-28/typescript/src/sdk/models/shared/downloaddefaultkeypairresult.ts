import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DownloadDefaultKeyPairResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=privateKeyBase64" })
  privateKeyBase64?: string;

  @Metadata({ data: "json, name=publicKeyBase64" })
  publicKeyBase64?: string;
}
