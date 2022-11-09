import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CertificateSummary } from "./certificatesummary";
import { Operation } from "./operation";


export class CreateCertificateResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate?: CertificateSummary;

  @Metadata({ data: "json, name=operations", elemType: shared.Operation })
  operations?: Operation[];
}
