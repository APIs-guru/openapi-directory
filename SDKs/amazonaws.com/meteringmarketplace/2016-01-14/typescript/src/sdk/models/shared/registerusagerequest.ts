import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterUsageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Nonce" })
  nonce?: string;

  @Metadata({ data: "json, name=ProductCode" })
  productCode: string;

  @Metadata({ data: "json, name=PublicKeyVersion" })
  publicKeyVersion: number;
}
