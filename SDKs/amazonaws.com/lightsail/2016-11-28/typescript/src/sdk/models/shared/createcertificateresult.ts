import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateSummary } from "./certificatesummary";
import { Operation } from "./operation";



export class CreateCertificateResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate?: CertificateSummary;

  @SpeakeasyMetadata({ data: "json, name=operations", elemType: Operation })
  operations?: Operation[];
}
