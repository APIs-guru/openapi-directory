import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetParametersForImportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImportToken" })
  importToken?: string;

  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;

  @Metadata({ data: "json, name=ParametersValidTo" })
  parametersValidTo?: Date;

  @Metadata({ data: "json, name=PublicKey" })
  publicKey?: string;
}
