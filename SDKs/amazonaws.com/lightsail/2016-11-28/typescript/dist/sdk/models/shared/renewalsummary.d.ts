import { SpeakeasyBase } from "../../../internal/utils";
import { DomainValidationRecord } from "./domainvalidationrecord";
import { RenewalStatusEnum } from "./renewalstatusenum";
/**
 * Describes the status of a SSL/TLS certificate renewal managed by Amazon Lightsail.
**/
export declare class RenewalSummary extends SpeakeasyBase {
    domainValidationRecords?: DomainValidationRecord[];
    renewalStatus?: RenewalStatusEnum;
    renewalStatusReason?: string;
    updatedAt?: Date;
}
