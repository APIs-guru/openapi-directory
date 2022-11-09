import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateStatusEnum } from "./certificatestatusenum";


export class GetCertificatesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateName" })
  certificateName?: string;

  @Metadata({ data: "json, name=certificateStatuses" })
  certificateStatuses?: CertificateStatusEnum[];

  @Metadata({ data: "json, name=includeCertificateDetails" })
  includeCertificateDetails?: boolean;
}
