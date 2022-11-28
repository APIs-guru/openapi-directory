import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateSummary } from "./certificatesummary";



export class GetCertificatesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificates", elemType: CertificateSummary })
  certificates?: CertificateSummary[];
}
