import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductSigningCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateHashSha1" })
  certificateHashSha1?: string;

  @Metadata({ data: "json, name=certificateHashSha256" })
  certificateHashSha256?: string;
}
