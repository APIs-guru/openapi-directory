import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceRecord } from "./resourcerecord";


// DomainValidationRecord
/** 
 * Describes the domain validation records of an Amazon Lightsail SSL/TLS certificate.
**/
export class DomainValidationRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=resourceRecord" })
  resourceRecord?: ResourceRecord;
}
