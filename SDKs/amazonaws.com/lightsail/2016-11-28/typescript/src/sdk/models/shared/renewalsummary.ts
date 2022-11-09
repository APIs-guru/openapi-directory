import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainValidationRecord } from "./domainvalidationrecord";
import { RenewalStatusEnum } from "./renewalstatusenum";


// RenewalSummary
/** 
 * Describes the status of a SSL/TLS certificate renewal managed by Amazon Lightsail.
**/
export class RenewalSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainValidationRecords", elemType: shared.DomainValidationRecord })
  domainValidationRecords?: DomainValidationRecord[];

  @Metadata({ data: "json, name=renewalStatus" })
  renewalStatus?: RenewalStatusEnum;

  @Metadata({ data: "json, name=renewalStatusReason" })
  renewalStatusReason?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
