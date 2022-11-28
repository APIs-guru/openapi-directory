import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainValidationRecord } from "./domainvalidationrecord";
import { RenewalSummary } from "./renewalsummary";
import { CertificateStatusEnum } from "./certificatestatusenum";
import { Tag } from "./tag";



// Certificate
/** 
 * <p>Describes the full details of an Amazon Lightsail SSL/TLS certificate.</p> <note> <p>To get a summary of a certificate, use the <code>GetCertificates</code> action and ommit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note>
**/
export class Certificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=domainValidationRecords", elemType: DomainValidationRecord })
  domainValidationRecords?: DomainValidationRecord[];

  @SpeakeasyMetadata({ data: "json, name=eligibleToRenew" })
  eligibleToRenew?: string;

  @SpeakeasyMetadata({ data: "json, name=inUseResourceCount" })
  inUseResourceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=issuedAt" })
  issuedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=issuerCA" })
  issuerCa?: string;

  @SpeakeasyMetadata({ data: "json, name=keyAlgorithm" })
  keyAlgorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notAfter" })
  notAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=notBefore" })
  notBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=renewalSummary" })
  renewalSummary?: RenewalSummary;

  @SpeakeasyMetadata({ data: "json, name=requestFailureReason" })
  requestFailureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=revocationReason" })
  revocationReason?: string;

  @SpeakeasyMetadata({ data: "json, name=revokedAt" })
  revokedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CertificateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subjectAlternativeNames" })
  subjectAlternativeNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
