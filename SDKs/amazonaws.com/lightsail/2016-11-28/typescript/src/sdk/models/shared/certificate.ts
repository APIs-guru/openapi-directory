import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainValidationRecord } from "./domainvalidationrecord";
import { RenewalSummary } from "./renewalsummary";
import { CertificateStatusEnum } from "./certificatestatusenum";
import { Tag } from "./tag";


// Certificate
/** 
 * <p>Describes the full details of an Amazon Lightsail SSL/TLS certificate.</p> <note> <p>To get a summary of a certificate, use the <code>GetCertificates</code> action and ommit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note>
**/
export class Certificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=domainValidationRecords", elemType: shared.DomainValidationRecord })
  domainValidationRecords?: DomainValidationRecord[];

  @Metadata({ data: "json, name=eligibleToRenew" })
  eligibleToRenew?: string;

  @Metadata({ data: "json, name=inUseResourceCount" })
  inUseResourceCount?: number;

  @Metadata({ data: "json, name=issuedAt" })
  issuedAt?: Date;

  @Metadata({ data: "json, name=issuerCA" })
  issuerCa?: string;

  @Metadata({ data: "json, name=keyAlgorithm" })
  keyAlgorithm?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notAfter" })
  notAfter?: Date;

  @Metadata({ data: "json, name=notBefore" })
  notBefore?: Date;

  @Metadata({ data: "json, name=renewalSummary" })
  renewalSummary?: RenewalSummary;

  @Metadata({ data: "json, name=requestFailureReason" })
  requestFailureReason?: string;

  @Metadata({ data: "json, name=revocationReason" })
  revocationReason?: string;

  @Metadata({ data: "json, name=revokedAt" })
  revokedAt?: Date;

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=status" })
  status?: CertificateStatusEnum;

  @Metadata({ data: "json, name=subjectAlternativeNames" })
  subjectAlternativeNames?: string[];

  @Metadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
