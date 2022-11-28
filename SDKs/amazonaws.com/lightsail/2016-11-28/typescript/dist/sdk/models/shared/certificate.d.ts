import { SpeakeasyBase } from "../../../internal/utils";
import { DomainValidationRecord } from "./domainvalidationrecord";
import { RenewalSummary } from "./renewalsummary";
import { CertificateStatusEnum } from "./certificatestatusenum";
import { Tag } from "./tag";
/**
 * <p>Describes the full details of an Amazon Lightsail SSL/TLS certificate.</p> <note> <p>To get a summary of a certificate, use the <code>GetCertificates</code> action and ommit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note>
**/
export declare class Certificate extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    domainName?: string;
    domainValidationRecords?: DomainValidationRecord[];
    eligibleToRenew?: string;
    inUseResourceCount?: number;
    issuedAt?: Date;
    issuerCa?: string;
    keyAlgorithm?: string;
    name?: string;
    notAfter?: Date;
    notBefore?: Date;
    renewalSummary?: RenewalSummary;
    requestFailureReason?: string;
    revocationReason?: string;
    revokedAt?: Date;
    serialNumber?: string;
    status?: CertificateStatusEnum;
    subjectAlternativeNames?: string[];
    supportCode?: string;
    tags?: Tag[];
}
