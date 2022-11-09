import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=domainValidationRecords", elemType: shared.LoadBalancerTlsCertificateDomainValidationRecord })
  domainValidationRecords?: LoadBalancerTlsCertificateDomainValidationRecord[];

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: LoadBalancerTlsCertificateFailureReasonEnum;

  @Metadata({ data: "json, name=isAttached" })
  isAttached?: boolean;

  @Metadata({ data: "json, name=issuedAt" })
  issuedAt?: Date;

  @Metadata({ data: "json, name=issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=keyAlgorithm" })
  keyAlgorithm?: string;

  @Metadata({ data: "json, name=loadBalancerName" })
  loadBalancerName?: string;

  @Metadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notAfter" })
  notAfter?: Date;

  @Metadata({ data: "json, name=notBefore" })
  notBefore?: Date;

  @Metadata({ data: "json, name=renewalSummary" })
  renewalSummary?: LoadBalancerTlsCertificateRenewalSummary;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=revocationReason" })
  revocationReason?: LoadBalancerTlsCertificateRevocationReasonEnum;

  @Metadata({ data: "json, name=revokedAt" })
  revokedAt?: Date;

  @Metadata({ data: "json, name=serial" })
  serial?: string;

  @Metadata({ data: "json, name=signatureAlgorithm" })
  signatureAlgorithm?: string;

  @Metadata({ data: "json, name=status" })
  status?: LoadBalancerTlsCertificateStatusEnum;

  @Metadata({ data: "json, name=subject" })
  subject?: string;

  @Metadata({ data: "json, name=subjectAlternativeNames" })
  subjectAlternativeNames?: string[];

  @Metadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
