import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImportKeyPairRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyPairName" })
  keyPairName: string;

  @Metadata({ data: "json, name=publicKeyBase64" })
  publicKeyBase64: string;
}
