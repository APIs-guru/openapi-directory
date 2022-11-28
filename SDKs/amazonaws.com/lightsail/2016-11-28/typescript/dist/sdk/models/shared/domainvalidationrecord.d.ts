import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceRecord } from "./resourcerecord";
/**
 * Describes the domain validation records of an Amazon Lightsail SSL/TLS certificate.
**/
export declare class DomainValidationRecord extends SpeakeasyBase {
    domainName?: string;
    resourceRecord?: ResourceRecord;
}
