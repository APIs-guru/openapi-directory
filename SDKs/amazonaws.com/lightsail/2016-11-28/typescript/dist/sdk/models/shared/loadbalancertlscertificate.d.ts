import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerTlsCertificateDomainValidationRecord } from "./loadbalancertlscertificatedomainvalidationrecord";
import { LoadBalancerTlsCertificateFailureReasonEnum } from "./loadbalancertlscertificatefailurereasonenum";
import { ResourceLocation } from "./resourcelocation";
import { LoadBalancerTlsCertificateRenewalSummary } from "./loadbalancertlscertificaterenewalsummary";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { LoadBalancerTlsCertificateRevocationReasonEnum } from "./loadbalancertlscertificaterevocationreasonenum";
import { LoadBalancerTlsCertificateStatusEnum } from "./loadbalancertlscertificatestatusenum";
import { Tag } from "./tag";
/**
 * <p>Describes a load balancer SSL/TLS certificate.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
**/
export declare class LoadBalancerTlsCertificate extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    domainName?: string;
    domainValidationRecords?: LoadBalancerTlsCertificateDomainValidationRecord[];
    failureReason?: LoadBalancerTlsCertificateFailureReasonEnum;
    isAttached?: boolean;
    issuedAt?: Date;
    issuer?: string;
    keyAlgorithm?: string;
    loadBalancerName?: string;
    location?: ResourceLocation;
    name?: string;
    notAfter?: Date;
    notBefore?: Date;
    renewalSummary?: LoadBalancerTlsCertificateRenewalSummary;
    resourceType?: ResourceTypeEnum;
    revocationReason?: LoadBalancerTlsCertificateRevocationReasonEnum;
    revokedAt?: Date;
    serial?: string;
    signatureAlgorithm?: string;
    status?: LoadBalancerTlsCertificateStatusEnum;
    subject?: string;
    subjectAlternativeNames?: string[];
    supportCode?: string;
    tags?: Tag[];
}
