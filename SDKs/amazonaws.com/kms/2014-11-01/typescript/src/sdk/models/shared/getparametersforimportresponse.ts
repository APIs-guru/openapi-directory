import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetParametersForImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImportToken" })
  importToken?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=ParametersValidTo" })
  parametersValidTo?: Date;

  @SpeakeasyMetadata({ data: "json, name=PublicKey" })
  publicKey?: string;
}
