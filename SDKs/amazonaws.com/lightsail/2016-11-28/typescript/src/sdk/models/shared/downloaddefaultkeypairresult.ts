import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DownloadDefaultKeyPairResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privateKeyBase64" })
  privateKeyBase64?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKeyBase64" })
  publicKeyBase64?: string;
}
