import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceRecord } from "./resourcerecord";



// DomainValidationRecord
/** 
 * Describes the domain validation records of an Amazon Lightsail SSL/TLS certificate.
**/
export class DomainValidationRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceRecord" })
  resourceRecord?: ResourceRecord;
}
