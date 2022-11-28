import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainValidationRecord } from "./domainvalidationrecord";
import { RenewalStatusEnum } from "./renewalstatusenum";



// RenewalSummary
/** 
 * Describes the status of a SSL/TLS certificate renewal managed by Amazon Lightsail.
**/
export class RenewalSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainValidationRecords", elemType: DomainValidationRecord })
  domainValidationRecords?: DomainValidationRecord[];

  @SpeakeasyMetadata({ data: "json, name=renewalStatus" })
  renewalStatus?: RenewalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=renewalStatusReason" })
  renewalStatusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
