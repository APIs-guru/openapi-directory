import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CertificateSummary } from "./certificatesummary";


export class GetCertificatesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificates", elemType: shared.CertificateSummary })
  certificates?: CertificateSummary[];
}
