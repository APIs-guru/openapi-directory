import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=beneficiaryId" })
  beneficiaryId?: string;

  @Metadata({ data: "json, name=mobile" })
  mobile?: string;
}
