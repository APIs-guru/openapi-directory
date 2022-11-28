import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportKeyPairRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyPairName" })
  keyPairName: string;

  @SpeakeasyMetadata({ data: "json, name=publicKeyBase64" })
  publicKeyBase64: string;
}
