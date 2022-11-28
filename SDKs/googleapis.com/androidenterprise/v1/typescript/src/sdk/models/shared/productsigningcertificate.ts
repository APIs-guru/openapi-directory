import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductSigningCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateHashSha1" })
  certificateHashSha1?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateHashSha256" })
  certificateHashSha256?: string;
}
