import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Nonce" })
  nonce?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductCode" })
  productCode: string;

  @SpeakeasyMetadata({ data: "json, name=PublicKeyVersion" })
  publicKeyVersion: number;
}
