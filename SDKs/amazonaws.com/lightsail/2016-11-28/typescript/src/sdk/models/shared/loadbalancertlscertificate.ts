import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerTlsCertificateDomainValidationRecord } from "./loadbalancertlscertificatedomainvalidationrecord";
import { LoadBalancerTlsCertificateFailureReasonEnum } from "./loadbalancertlscertificatefailurereasonenum";
import { ResourceLocation } from "./resourcelocation";
import { LoadBalancerTlsCertificateRenewalSummary } from "./loadbalancertlscertificaterenewalsummary";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { LoadBalancerTlsCertificateRevocationReasonEnum } from "./loadbalancertlscertificaterevocationreasonenum";
import { LoadBalancerTlsCertificateStatusEnum } from "./loadbalancertlscertificatestatusenum";
import { Tag } from "./tag";



// LoadBalancerTlsCertificate
/** 
 * <p>Describes a load balancer SSL/TLS certificate.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
**/
export class LoadBalancerTlsCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=domainValidationRecords", elemType: LoadBalancerTlsCertificateDomainValidationRecord })
  domainValidationRecords?: LoadBalancerTlsCertificateDomainValidationRecord[];

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: LoadBalancerTlsCertificateFailureReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=isAttached" })
  isAttached?: boolean;

  @SpeakeasyMetadata({ data: "json, name=issuedAt" })
  issuedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=keyAlgorithm" })
  keyAlgorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=loadBalancerName" })
  loadBalancerName?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notAfter" })
  notAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=notBefore" })
  notBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=renewalSummary" })
  renewalSummary?: LoadBalancerTlsCertificateRenewalSummary;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=revocationReason" })
  revocationReason?: LoadBalancerTlsCertificateRevocationReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=revokedAt" })
  revokedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial?: string;

  @SpeakeasyMetadata({ data: "json, name=signatureAlgorithm" })
  signatureAlgorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: LoadBalancerTlsCertificateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=subjectAlternativeNames" })
  subjectAlternativeNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
