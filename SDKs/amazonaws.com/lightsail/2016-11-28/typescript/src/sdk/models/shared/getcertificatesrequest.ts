import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateStatusEnum } from "./certificatestatusenum";



export class GetCertificatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateName" })
  certificateName?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateStatuses" })
  certificateStatuses?: CertificateStatusEnum[];

  @SpeakeasyMetadata({ data: "json, name=includeCertificateDetails" })
  includeCertificateDetails?: boolean;
}
